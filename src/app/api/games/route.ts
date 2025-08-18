import { prisma } from '@/lib/prisma'
import bcrypt from 'bcrypt'
import { type NextRequest, NextResponse } from 'next/server'

export const GET = async () => {
	try {
		const games = await prisma.game.findMany()

		return NextResponse.json(games)
	} catch (error) {
		console.error(error)
		return NextResponse.json(error, { status: 500 })
	}
}

export const POST = async (req: NextRequest) => {
	try {
		const body = await req.json()

		const password = await bcrypt.hash(body.password, 10)
		const game = await prisma.game.create({
			data: {
				name: body.name,
				password,
				creatorId: body.creatorId,
			},
		})

		return NextResponse.json(game)
	} catch (error) {
		console.error(error)
		return NextResponse.json(error, { status: 500 })
	}
}
