import { prisma } from '@/lib/prisma'
import { TurnMapItem } from '@/types/api'

export async function POST(req: Request) {
	try {
		const { gameId, playerId } = await req.json()

		const player = await prisma.gamePlayer.findFirst({
			where: { gameId, playerId },
		})

		if (!player?.id) {
			return Response.json({ message: 'Unathorized' }, { status: 401 })
		}

		const game = await prisma.game.findUnique({
			where: { id: gameId },
		})

		if (!game) {
			return Response.json({ message: 'Game not founded' }, { status: 404 })
		}

		if (game.hostId !== player.playerId) {
			return Response.json({ message: 'Unathorized' }, { status: 401 })
		}

		const [cities, countriesList, turnResponse] = await Promise.all([
			prisma.gameCity.findMany({
				where: { gameId },
				select: {
					id: true,
					template: {
						select: {
							name: true,
						},
					},
				},
			}),
			prisma.gameCountry.findMany({
				where: { gameId },
				select: {
					id: true,
					template: {
						select: {
							name: true,
						},
					},
				},
			}),
			prisma.gameTurn.findMany({
				where: {
					gameId,
				},
				orderBy: {
					round: 'asc',
				},
				select: {
					id: true,
					round: true,
					buildNukes: true,
					ecoProgram: true,
					updatedCities: true,
					attackedCities: true,
					protectedCities: true,
					nuclearTechnology: true,
					sanctionedCountries: true,
					sendedMoney: true,
					country: {
						select: {
							template: {
								select: {
									name: true,
								},
							},
						},
					},
				},
			}),
		])

		const cityMap = new Map(cities.map(c => [c.id, c.template.name]))

		const countryMap = new Map(countriesList.map(c => [c.id, c.template.name]))

		const mapIdsToNames = (
			idsString: string | null,
			map: Map<string, string>,
		) => {
			if (!idsString) return []

			return idsString
				.split(',')
				.map(id => map.get(id))
				.filter(Boolean) as string[]
		}

		const mapSendedMoney = (str: string | null, map: Map<string, string>) => {
			if (!str) return []

			return str
				.split(',')
				.map(action => ({
					toCountry: map.get(action.split(':')[0]),
					amount: Number(action.split(':')[1]),
				}))
				.filter(act => act.toCountry !== undefined) as {
				toCountry: string
				amount: number
			}[]
		}

		const turnsMap = turnResponse.reduce(
			(acc, turn) => {
				const round = turn.round

				if (!acc[round]) {
					acc[round] = { countries: [] }
				}

				acc[round].countries.push({
					countryName: turn.country.template.name,
					actions: {
						buildNukes: turn.buildNukes,
						ecoProgram: turn.ecoProgram,
						nuclearTechnology: turn.nuclearTechnology,
						updatedCities: mapIdsToNames(turn.updatedCities, cityMap),
						protectedCities: mapIdsToNames(turn.protectedCities, cityMap),
						attackedCities: mapIdsToNames(turn.attackedCities, cityMap),
						sanctionedCountries: mapIdsToNames(
							turn.sanctionedCountries,
							countryMap,
						),
						sendedMoney: mapSendedMoney(turn.sendedMoney, countryMap),
					},
				})

				return acc
			},
			{} as Record<number, TurnMapItem>,
		)

		const turns = Object.entries(turnsMap)
			.sort(([a], [b]) => Number(a) - Number(b))
			.map(([round, data]) => ({
				round: Number(round),
				...data,
			}))

		return Response.json({ turns })
	} catch (e) {
		console.error(e)
		return new Response('Internal error', { status: 500 })
	}
}
