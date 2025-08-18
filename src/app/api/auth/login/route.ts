import { COOKIES, SECRET_JWT_KEY } from '@/constants'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { NextResponse, type NextRequest } from 'next/server'
import { minLength, object, parse, pipe, string, ValiError } from 'valibot'

const loginSchema = object({
	name: pipe(
		string('Обязательное поле'),
		minLength(3, 'Имя должно содержать минимум 3 символа')
	),
	password: pipe(
		string('Обязательное поле'),
		minLength(6, 'Пароль должен содержать минимум 6 символов')
	),
})

export const POST = async (req: NextRequest) => {
	try {
		const body = await req.json()
		const { name, password } = parse(loginSchema, body)

		const user = await prisma.user.findUnique({ where: { name } })
		if (!user) {
			return NextResponse.json(
				{ error: 'Неверный логин или пароль' },
				{ status: 401 }
			)
		}

		const isPasswordRight = await bcrypt.compare(password, user.password)
		if (!isPasswordRight) {
			return NextResponse.json(
				{ error: 'Неверный логин или пароль' },
				{ status: 401 }
			)
		}

		const payload = { id: user.id, name: user.name }
		const access = jwt.sign(payload, SECRET_JWT_KEY, { expiresIn: '5m' })
		const refresh = jwt.sign(payload, SECRET_JWT_KEY, { expiresIn: '7d' })

		const res = NextResponse.json({ user: payload, access }, { status: 200 })

		res.cookies.set(COOKIES.REFRESH_TOKEN, refresh, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'strict',
			path: '/',
		})

		res.cookies.set(COOKIES.ACCESS_TOKEN, access, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'strict',
			path: '/',
		})

		return res
	} catch (error) {
		console.error(error)
		if (error instanceof ValiError) {
			return NextResponse.json({ error: error.issues }, { status: 400 })
		}
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		)
	}
}
