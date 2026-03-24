import {
	calculateIncome,
	calculateLife,
} from '@/features/country/model/formulas'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
	try {
		const { gameId, playerId } = await req.json()

		const game = await prisma.game.findUnique({
			where: { id: gameId },
		})

		if (!game || game.hostId !== playerId) {
			return new Response('Forbidden', { status: 403 })
		}

		const [turns, countries] = await Promise.all([
			prisma.gameTurn.findMany({
				where: { gameId, round: game.round },
			}),
			prisma.gameCountry.findMany({
				where: {
					gameId,
					players: {
						some: {},
					},
				},
				include: {
					cities: {
						include: {
							template: {
								select: {
									baseLife: true,
								},
							},
						},
					},
				},
			}),
		])

		let ecologyDelta = 0

		const cityUpdates: {
			id: string
			dev?: boolean
			attack?: boolean
			shield?: boolean
		}[] = []
		const countryBudgetChanges = new Map<string, number>()
		const countryNukes = new Map<string, number>()
		const countryHasNuclear = new Set<string>()
		const countryNukesSpent = new Map<string, number>()

		for (const turn of turns) {
			const updatedCities = turn.updatedCities?.length
				? turn.updatedCities.split(',')
				: []

			const protectedCities = turn.protectedCities?.length
				? turn.protectedCities.split(',')
				: []

			const attackedCities = turn.attackedCities?.length
				? turn.attackedCities.split(',')
				: []

			if (attackedCities.length > 0) {
				ecologyDelta -= 5 * attackedCities.length

				countryNukesSpent.set(
					turn.countryId,
					(countryNukesSpent.get(turn.countryId) || 0) + attackedCities.length
				)
			}

			for (const cityId of updatedCities) {
				cityUpdates.push({ id: cityId, dev: true })

				countryBudgetChanges.set(
					turn.countryId,
					(countryBudgetChanges.get(turn.countryId) || 0) - 150
				)
			}

			for (const cityId of protectedCities) {
				cityUpdates.push({ id: cityId, shield: true })

				countryBudgetChanges.set(
					turn.countryId,
					(countryBudgetChanges.get(turn.countryId) || 0) - 300
				)
			}

			for (const cityId of attackedCities) {
				cityUpdates.push({ id: cityId, attack: true })
			}

			if (turn.nuclearTechnology) {
				ecologyDelta -= 2
				countryHasNuclear.add(turn.countryId)

				countryBudgetChanges.set(
					turn.countryId,
					(countryBudgetChanges.get(turn.countryId) || 0) - 500
				)
			}

			if (turn.buildNukes > 0) {
				ecologyDelta -= turn.buildNukes * 2

				countryNukes.set(
					turn.countryId,
					(countryNukes.get(turn.countryId) || 0) + turn.buildNukes
				)

				countryBudgetChanges.set(
					turn.countryId,
					(countryBudgetChanges.get(turn.countryId) || 0) -
						500 * turn.buildNukes
				)
			}

			if (turn.ecoProgram) {
				ecologyDelta += 15

				countryBudgetChanges.set(
					turn.countryId,
					(countryBudgetChanges.get(turn.countryId) || 0) - 200
				)
			}
		}

		await prisma.$transaction(async tx => {
			const citiesBefore = await tx.gameCity.findMany({
				where: { gameId },
			})

			const incomeMap = new Map<string, number>()

			for (const city of citiesBefore) {
				const life = calculateLife({
					baseLife: city.life,
					ecology: game.ecology,
					sanctionsCount: 0,
				})

				const income = calculateIncome({
					life,
					development: city.development,
				})

				incomeMap.set(
					city.countryId,
					(incomeMap.get(city.countryId) || 0) + income
				)
			}

			for (const update of cityUpdates) {
				if (update.dev) {
					await tx.gameCity.update({
						where: { id: update.id },
						data: {
							development: { increment: 20 },
						},
					})
				}

				if (update.shield) {
					await tx.gameCity.update({
						where: { id: update.id },
						data: {
							protection: 2,
						},
					})
				}

				if (update.attack) {
					await tx.gameCity.update({
						where: { id: update.id },
						data: {
							protection: { decrement: 1 },
						},
					})
				}
			}

			const newEcology = game.ecology + ecologyDelta

			await tx.game.update({
				where: { id: gameId },
				data: { ecology: newEcology },
			})

			for (const country of countries) {
				await tx.gameCountry.update({
					where: { id: country.id },
					data: {
						budget:
							country.budget +
							(incomeMap.get(country.id) || 0) +
							(countryBudgetChanges.get(country.id) || 0),

						nukes: {
							increment:
								(countryNukes.get(country.id) || 0) -
								(countryNukesSpent.get(country.id) || 0),
						},

						hasNuclearProgram: countryHasNuclear.has(country.id)
							? true
							: undefined,
					},
				})

				for (const city of country.cities) {
					if (city.protection < 1) {
						await tx.gameCity.update({
							where: { id: city.id },
							data: {
								life: 0,
								development: 0,
							},
						})
					} else {
						await tx.gameCity.update({
							where: { id: city.id },
							data: {
								life: calculateLife({
									baseLife: city.template.baseLife,
									ecology: game.ecology,
									sanctionsCount: 0,
								}),
							},
						})
					}
				}
			}
		})

		return Response.json({ ok: true })
	} catch (e) {
		console.error(e)
		return new Response('Internal error', { status: 500 })
	}
}
