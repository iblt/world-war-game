import { AUHTORIZATION_HEADER, SECRET_JWT_KEY } from '@/constants'
import { getErrorMessage, getUserIdByJwt } from '@/helpers'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'

export const GET = async (
	req: Request,
	{ params }: { params: Promise<{ gameId: string }> }
) => {
	try {
		const gameId = (await params).gameId
		if (!gameId || isNaN(+gameId)) {
			return NextResponse.json({ error: 'Невалидный id игры' }, { status: 400 })
		}
		const token = req.headers.get(AUHTORIZATION_HEADER)

		if (!token) {
			return NextResponse.json({ error: 'Ошибка авторизации' }, { status: 401 })
		}

		try {
			const id = getUserIdByJwt(jwt.verify(token, SECRET_JWT_KEY))
			if (!id) {
				return NextResponse.json({ error: 'Ошибка токена' }, { status: 401 })
			}
			const user = await prisma.user.findFirstOrThrow({
				where: {
					id: id,
				},
			})

			if (user.currentGameId !== +gameId) {
				return NextResponse.json(
					{ error: 'Эта игра вам недоступна' },
					{ status: 403 }
				)
			}
		} catch (error) {
			return NextResponse.json(
				{ error: `Ошибка авторизации: ${getErrorMessage(error)}` },
				{ status: 400 }
			)
		}

		const game = prisma.game.findFirst({
			where: {
				id: +gameId,
			},
		})

		return game
	} catch (error) {
		return NextResponse.json({ error: getErrorMessage(error) })
	}
}

export const POST = async (
	req: Request,
	{ params }: { params: Promise<{ gameId: string }> }
) => {
	const gameId = (await params).gameId
	if (!gameId || isNaN(+gameId)) {
		return NextResponse.json({ error: 'Невалидный id игры' }, { status: 400 })
	}
	const body: { password: string } = await req.json()

	if (!('password' in body)) {
		return NextResponse.json({ error: 'Невалидный body' }, { status: 400 })
	}

	const token = req.headers.get(AUHTORIZATION_HEADER)

	if (!token) {
		return NextResponse.json({ error: 'Ошибка авторизации' }, { status: 401 })
	}

	try {
		const id = getUserIdByJwt(jwt.verify(token, SECRET_JWT_KEY))
		if (!id) {
			return NextResponse.json({ error: 'Ошибка токена' }, { status: 401 })
		}
	} catch (error) {
		return NextResponse.json(
			{ error: `Ошибка авторизации: ${getErrorMessage(error)}` },
			{ status: 400 }
		)
	}

	try {
		const game = await prisma.game.findFirstOrThrow({
			where: {
				id: +gameId,
			},
		})
		if (!game) throw new Error('Игра не найдена')
		const isPasswordRight = await bcrypt.compare(body.password, game.password)
		if (!isPasswordRight) throw new Error('Неверный пароль')
	} catch (error) {
		return NextResponse.json({ error: getErrorMessage(error) }, { status: 400 })
	}
}
