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

		let nextPhase = game.phase
		let nextRound = game.round

		switch (game.phase) {
			case 'LOBBY':
				nextPhase = 'COUNTRY_MANAGEMENT'
				break

			case 'COUNTRY_MANAGEMENT':
				nextPhase = 'WAITING_UN'
				break

			case 'WAITING_UN':
				await fetch(`${process.env.BASE_URL}/api/game/process-round`, {
					method: 'POST',
					body: JSON.stringify({ gameId, playerId }),
				})

				nextPhase = 'UN_STATS'
				break

			case 'UN_STATS':
				if (game.round === 5) {
					nextPhase = 'RESULTS'
				} else {
					nextPhase = 'COUNTRY_MANAGEMENT'
					nextRound += 1
				}
				break
		}

		await prisma.game.update({
			where: { id: gameId },
			data: {
				phase: nextPhase,
				round: nextRound,
			},
		})

		await pusher.trigger(`game-${gameId}`, 'round_started', {
			phase: nextPhase,
			round: nextRound,
		})

		return Response.json({ ok: true })
	} catch (e) {
		console.error(e)
		return new Response('Internal error', { status: 500 })
	}
}
