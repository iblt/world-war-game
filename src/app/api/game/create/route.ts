import { prisma } from '@/lib/prisma'

function generateCode() {
	return Math.random().toString(36).substring(2, 8).toUpperCase()
}

export async function POST(req: Request) {
	try {
		const { playerName } = await req.json()

		const player = await prisma.player.create({
			data: { name: playerName },
		})

		const game = await prisma.game.create({
			data: {
				joinCode: generateCode(),
				hostId: player.id,
			},
		})

		await prisma.gamePlayer.create({
			data: {
				gameId: game.id,
				playerId: player.id,
			},
		})

		const countries = await prisma.countryTemplate.findMany({
			include: {
				cities: true,
			},
		})

		for (const country of countries) {
			const gameCountry = await prisma.gameCountry.create({
				data: {
					gameId: game.id,
					templateId: country.id,
				},
			})

			for (const city of country.cities) {
				await prisma.gameCity.create({
					data: {
						gameId: game.id,
						templateId: city.id,
						countryId: gameCountry.id,

						life: city.baseLife,
						development: city.baseDevelopment,
					},
				})
			}
		}

		return Response.json({
			gameId: game.id,
			joinCode: game.joinCode,
			playerId: player.id,
		})
	} catch (e) {
		console.error(e)
		return new Response('Internal error', { status: 500 })
	}
}
