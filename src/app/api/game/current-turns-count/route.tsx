import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
	try {
		const { gameId, playerId } = await req.json()

		const game = await prisma.game.findUnique({
			where: { id: gameId },
		})

		if (!game) {
			return Response.json({ message: 'Game not founded' }, { status: 404 })
		}

		if (game?.hostId !== playerId) {
			return Response.json({ message: 'Unauthorized' }, { status: 401 })
		}

		const turnsCount = await prisma.gameTurn.count({
			where: {
				gameId,
				round: game.round,
			},
		})

		return Response.json({ turnsCount })
	} catch (e) {
		console.error(e)
		return new Response('Internal error', { status: 500 })
	}
}
