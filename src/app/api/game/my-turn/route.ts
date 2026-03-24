import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
	try {
		const { gameId, playerId } = await req.json()

		const player = await prisma.gamePlayer.findFirst({
			where: { gameId, playerId },
		})

		if (!player?.countryId) {
			return Response.json({ turn: null })
		}

		const game = await prisma.game.findUnique({
			where: { id: gameId },
		})

		const turn = await prisma.gameTurn.findUnique({
			where: {
				gameId_countryId_round: {
					gameId,
					countryId: player.countryId,
					round: game!.round,
				},
			},
		})

		return Response.json({ turn })
	} catch (e) {
		console.error(e)
		return new Response('Internal error', { status: 500 })
	}
}
