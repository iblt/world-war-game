import { prisma } from '@/lib/prisma'
import { pusher } from '@/lib/pusher'

export async function POST(req: Request) {
	try {
		const { code, playerName } = await req.json()

		const game = await prisma.game.findUnique({
			where: { joinCode: code },
		})

		console.log('game', game)

		if (!game) {
			return new Response('Game not found', { status: 404 })
		}

		const player = await prisma.player.create({
			data: { name: playerName },
		})

		console.log('player', player)

		const gamePlayer = await prisma.gamePlayer.create({
			data: {
				gameId: game.id,
				playerId: player.id,
			},
		})

		console.log('gamePlayer', gamePlayer)

		await pusher.trigger(`game-${game.id}`, 'player_joined', {
			player: {
				id: player.id,
				name: player.name,
			},
		})

		return Response.json(
			{
				gameId: game.id,
				playerId: player.id,
				gamePlayerId: gamePlayer.id,
			},
			{ status: 200 },
		)
	} catch (e) {
		console.log(e)
		return Response.json({ message: 'Server Error' }, { status: 500 })
	}
}
