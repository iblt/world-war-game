import { prisma } from '@/lib/prisma'
import { pusher } from '@/lib/pusher'

export async function POST(req: Request) {
	try {
		const { gameId, playerId } = await req.json()

		const player = await prisma.gamePlayer.findFirst({
			where: { gameId, playerId },
		})

		if (!player || !player.isPresident) {
			return new Response('Forbidden', { status: 403 })
		}

		await prisma.gameCity.updateMany({
			where: { countryId: player.countryId! },
			data: {
				development: {
					multiply: 1.2,
				},
			},
		})

		await pusher.trigger(`game-${gameId}`, 'round_started', {})

		return Response.json({ ok: true })
	} catch (e) {
		console.error(e)
		return new Response('Internal error', { status: 500 })
	}
}
