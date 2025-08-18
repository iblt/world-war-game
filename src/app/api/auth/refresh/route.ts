import { COOKIES, SECRET_JWT_KEY } from '@/constants'
import { getUserIdByJwt } from '@/helpers'
import { prisma } from '@/lib/prisma'
import jwt from 'jsonwebtoken'
import { NextResponse, type NextRequest } from 'next/server'

export const POST = async (req: NextRequest) => {
	try {
		const refreshToken = req.cookies.get(COOKIES.REFRESH_TOKEN)?.value

		if (!refreshToken) {
			return NextResponse.json({ error: 'Нет refresh токена' }, { status: 401 })
		}

		let payload
		try {
			payload = jwt.verify(refreshToken, SECRET_JWT_KEY)
		} catch {
			return NextResponse.json(
				{ error: 'Refresh токен невалиден' },
				{ status: 401 }
			)
		}

		const userId = getUserIdByJwt(payload)
		if (!userId) {
			return NextResponse.json(
				{ error: 'Неверный refresh токен' },
				{ status: 401 }
			)
		}

		// Проверим, что пользователь ещё существует
		const user = await prisma.user.findUnique({ where: { id: userId } })
		if (!user) {
			return NextResponse.json(
				{ error: 'Пользователь не найден' },
				{ status: 401 }
			)
		}

		// Выпускаем новый access токен
		const newAccess = jwt.sign(
			{ id: user.id, name: user.name },
			SECRET_JWT_KEY,
			{
				expiresIn: '5m',
			}
		)

		const res = NextResponse.json({ access: newAccess }, { status: 200 })

		res.cookies.set(COOKIES.ACCESS_TOKEN, newAccess, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'strict',
			path: '/',
		})

		return res
	} catch (error) {
		console.error(error)
		return NextResponse.json(
			{ error: 'Ошибка обновления токена' },
			{ status: 500 }
		)
	}
}
