import { prisma } from '@/lib/prisma'
import { Game } from '@/types/api'

export async function GET(
	req: Request,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const gameId = (await params).id

		const game = await prisma.game.findUnique({
			where: { id: gameId },
			include: {
				players: {
					include: {
						player: true,
					},
				},
				countries: {
					include: {
						template: true,
						cities: {
							include: {
								template: true,
							},
							orderBy: {
								template: {
									order: 'asc',
								},
							},
						},
						players: {
							include: {
								player: true,
							},
						},
						sanctionsFrom: {
							select: {
								toCountry: {
									select: {
										id: true,
									},
								},
							},
						},
						sanctionsTo: {
							select: {
								fromCountry: {
									select: {
										id: true,
									},
								},
							},
						},
					},
				},
			},
		})

		if (!game) {
			return new Response('Game not found', { status: 404 })
		}

		const response: { game: Game } = {
			game: {
				id: game.id,
				phase: game.phase,
				ecology: game.ecology,
				round: game.round,
				joinCode: game.joinCode,
				hostId: game.hostId,
				isPaused: game.isPaused,
				pausedAt: game.pausedAt,
				roundDuration: game.roundDuration,
				roundStartedAt: game.roundStartedAt,

				players: game.players.map(gp => ({
					id: gp.id,
					name: gp.player.name,
					countryId: gp.countryId,
					isPresident: gp.isPresident,
					playerId: gp.playerId,
				})),

				countries: game.countries.map(c => ({
					id: c.id,
					name: c.template.name,
					budget: c.budget,
					nukes: c.nukes,
					hasNuclearProgram: c.hasNuclearProgram,

					cities: c.cities.map(city => ({
						id: city.id,
						name: city.template.name,
						life: city.life,
						development: city.development,
						template: city.template,
						countryId: city.countryId,
						gameId: city.gameId,
						templateId: city.templateId,
						protection: city.protection,
					})),

					players: c.players.map(p => ({
						id: p.id,
						name: p.player.name,
						isPresident: p.isPresident,
						countryId: p.countryId,
						playerId: p.playerId,
					})),

					sanctionsFrom: c.sanctionsFrom.map(sanction => sanction.toCountry.id),
					sanctionsTo: c.sanctionsTo.map(sanction => sanction.fromCountry.id),
				})),
			},
		}

		return Response.json(response)
	} catch (error) {
		console.error('GET /api/game/[id] error:', error)

		return new Response('Internal Server Error', {
			status: 500,
		})
	}
}
