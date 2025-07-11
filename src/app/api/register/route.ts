import { SECRET_JWT_KEY } from '@/constants'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { NextResponse, type NextRequest } from 'next/server'

export const POST = async (req: NextRequest) => {
	try {
		const data = await req.json()

		const password = await bcrypt.hash(data.password, 5)

		const user = await prisma.user.create({
			data: {
				name: data.name,
				password,
			},
		})

		const returnedUser = {
			name: user.name,
		}

		const access = jwt.sign(returnedUser, SECRET_JWT_KEY, {
			expiresIn: '5m',
		})
		const refresh = jwt.sign(returnedUser, SECRET_JWT_KEY, {
			expiresIn: '7d',
		})

		return NextResponse.json(
			{ user: returnedUser, tokens: { access, refresh } },
			{ status: 200 }
		)
	} catch (error) {
		console.error(error)
		return NextResponse.json(error, { status: 500 })
	}
}
