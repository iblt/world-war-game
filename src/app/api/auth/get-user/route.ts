import { AUHTORIZATION_HEADER, SECRET_JWT_KEY } from '@/constants'
import { getErrorMessage, getUserIdByJwt } from '@/helpers'
import { jwt } from '@/lib/jwt'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export const GET = async (req: Request) => {
	try {
		const token = req.headers.get(AUHTORIZATION_HEADER)

		if (!token) {
			return NextResponse.json(
				{ error: 'Данные не предоставлены' },
				{ status: 401 }
			)
		}

		const jwtPayload = jwt.verify(token, SECRET_JWT_KEY)
		const userId = getUserIdByJwt(jwtPayload)

		if (!userId) {
			return NextResponse.json(
				{ error: 'Неверные данные авторизации' },
				{ status: 401 }
			)
		}

		const user = await prisma.user.findFirstOrThrow({
			where: {
				id: userId,
			},
		})

		return { id: user.id, name: user.name }
	} catch (error) {
		return NextResponse.json(
			{ error: `Ошибка авторизации: ${getErrorMessage(error)}` },
			{ status: 500 }
		)
	}
}
