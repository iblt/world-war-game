import { prisma } from '@/lib/prisma'
import { pusher } from '@/lib/pusher'

export async function POST(req: Request) {
	try {
		const {
			gameId,
			playerId,
			updatedCities,
			buildNukes,
			nuclearTechnology,
			ecoProgram,
			attackedCities,
			protectedCities,
			sanctionedCountries,
			sendedMoney,
		} = await req.json()

		const player = await prisma.gamePlayer.findFirst({
			where: { gameId, playerId },
		})

		if (!player?.countryId) {
			return new Response('No country', { status: 400 })
		}

		const game = await prisma.game.findUnique({
			where: { id: gameId },
		})

		console.log('submit turn sended money', sendedMoney)

		await prisma.gameTurn.upsert({
			where: {
				gameId_countryId_round: {
					gameId,
					countryId: player.countryId,
					round: game!.round,
				},
			},
			update: {
				updatedCities,
				buildNukes,
				ecoProgram,
				nuclearTechnology,
				attackedCities,
				protectedCities,
				sanctionedCountries,
				sendedMoney,
			},
			create: {
				gameId,
				countryId: player.countryId,
				round: game!.round,
				updatedCities,
				buildNukes,
				ecoProgram,
				nuclearTechnology,
				attackedCities,
				protectedCities,
				sanctionedCountries,
				sendedMoney,
			},
		})

		await pusher.trigger(`game-${gameId}`, 'turn_submited', {})

		return Response.json({ ok: true })
	} catch (e) {
		console.error(e)
		return new Response('Internal error', { status: 500 })
	}
}
