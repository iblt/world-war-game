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

		await prisma.game.update({
			where: { id: gameId },
			data: {
				isPaused: true,
				pausedAt: new Date(),
			},
		})

		await pusher.trigger(`game-${gameId}`, 'round_paused', {})

		return Response.json({ ok: true })
	} catch (e) {
		console.error(e)
		return new Response('Internal error', { status: 500 })
	}
}
