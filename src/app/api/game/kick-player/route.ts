import { prisma } from '@/lib/prisma'
import { pusher } from '@/lib/pusher'

export async function POST(req: Request) {
	try {
		const { gamePlayerId, gameId } = await req.json()

		await prisma.gamePlayer.delete({
			where: { id: gamePlayerId },
		})

		await pusher.trigger(`game-${gameId}`, 'player_joined', {})

		return Response.json({
			success: true,
		})
	} catch {
		return Response.json({ message: 'Server Error' }, { status: 500 })
	}
}
