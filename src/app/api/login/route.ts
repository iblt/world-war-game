import { prisma } from '@/lib/prisma'
import bcrypt from 'bcrypt'
import { NextResponse, type NextRequest } from 'next/server'

export const POST = async (req: NextRequest) => {
	try {
		const data = await req.json()

		const user = await prisma.user.findFirst({
			where: {
				name: data.name,
			},
		})

		if (!user) return NextResponse.json('Неверный логин или пароль')

		const isPasswordRight = await bcrypt.compare(data.password, user?.password)

		if (!isPasswordRight) return NextResponse.json('Неверный логин или пароль')

		const returnedUser = {
			name: user.name,
		}

		return NextResponse.json(returnedUser, { status: 200 })
	} catch (error) {
		console.error(error)
		return NextResponse.json(error, { status: 500 })
	}
}
