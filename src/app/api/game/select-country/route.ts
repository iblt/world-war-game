import { prisma } from '@/lib/prisma'
import { pusher } from '@/lib/pusher'

export async function POST(req: Request) {
	try {
		const { gameId, countryId, playerId } = await req.json()

		const gamePlayer = await prisma.gamePlayer.findFirst({
			where: {
				gameId,
				playerId,
			},
		})

		if (!gamePlayer) {
			return new Response('Player not found', { status: 404 })
		}

		const existingPresident = await prisma.gamePlayer.findFirst({
			where: {
				gameId,
				countryId,
				isPresident: true,
			},
		})

		const isPresident = !existingPresident

		await prisma.gamePlayer.update({
			where: { id: gamePlayer.id },
			data: {
				countryId,
				isPresident,
			},
		})

		await pusher.trigger(`game-${gameId}`, 'country_selected', {
			countryId,
		})

		return Response.json({ success: true })
	} catch (e) {
		console.error(e)
		return new Response('Internal error', { status: 500 })
	}
}
