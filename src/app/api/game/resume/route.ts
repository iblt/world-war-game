import { prisma } from '@/lib/prisma'
import { pusher } from '@/lib/pusher'

export async function POST(req: Request) {
	try {
		const { gameId, playerId } = await req.json()

		const game = await prisma.game.findUnique({
			where: { id: gameId },
		})

		if (!game || game.hostId !== playerId) {
			return new Response('Forbidden', { status: 403 })
		}

		if (!game.pausedAt || !game.roundStartedAt) {
			return new Response('Invalid state', { status: 400 })
		}

		const pauseDuration = Date.now() - new Date(game.pausedAt).getTime()

		await prisma.game.update({
			where: { id: gameId },
			data: {
				isPaused: false,
				pausedAt: null,
				roundStartedAt: new Date(
					new Date(game.roundStartedAt).getTime() + pauseDuration
				),
			},
		})

		await pusher.trigger(`game-${gameId}`, 'round_resumed', {})

		return Response.json({ ok: true })
	} catch (e) {
		console.error(e)
		return new Response('Internal error', { status: 500 })
	}
}
