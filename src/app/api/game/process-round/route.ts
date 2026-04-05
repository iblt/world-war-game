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
					_count: {
						select: {
							sanctionsTo: true,
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
		const sanctions = new Map<string, string[]>()
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

			const sanctionedCountries = turn.sanctionedCountries?.length
				? turn.sanctionedCountries.split(',')
				: []

			const sendedMoney = turn.sendedMoney
				? turn.sendedMoney.split(',').map(item => ({
						countryId: item.split(':')[0],
						amount: Number(item.split(':')[1]),
				  }))
				: []

			if (sanctionedCountries.length > 0) {
				const current = sanctions.get(turn.countryId) ?? []

				sanctions.set(turn.countryId, [...current, ...sanctionedCountries])
			}

			if (attackedCities.length > 0) {
				ecologyDelta -= 5 * attackedCities.length

				countryNukesSpent.set(
					turn.countryId,
					(countryNukesSpent.get(turn.countryId) || 0) + attackedCities.length
				)
			}

			for (const { countryId, amount } of sendedMoney) {
				countryBudgetChanges.set(
					countryId,
					(countryBudgetChanges.get(countryId) || 0) + amount
				)
				countryBudgetChanges.set(
					turn.countryId,
					(countryBudgetChanges.get(turn.countryId) || 0) - amount
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

		const updatesMap = new Map<
			string,
			{ dev: boolean; attacks: number; shield: boolean }
		>()

		for (const update of cityUpdates) {
			const current = updatesMap.get(update.id) ?? {
				dev: false,
				attacks: 0,
				shield: false,
			}

			if (update.dev) current.dev = true
			if (update.attack) current.attacks++
			if (update.shield) current.shield = true

			updatesMap.set(update.id, current)
		}

		await prisma.$transaction(
			async tx => {
				const citiesBefore = await tx.gameCity.findMany({
					where: { gameId, country: { players: { some: {} } } },
					include: {
						template: {
							select: {
								baseLife: true,
							},
						},
						country: {
							select: {
								_count: {
									select: {
										sanctionsTo: true,
									},
								},
							},
						},
					},
				})

				const incomeMap = new Map<string, number>()

				for (const city of citiesBefore.filter(city => city.protection > 0)) {
					const life = calculateLife({
						baseLife: city.template.baseLife,
						ecology: game.ecology,
						sanctionsCount: city.country._count.sanctionsTo,
						development: city.development,
					})

					const income = calculateIncome({
						life,
					})

					incomeMap.set(
						city.countryId,
						(incomeMap.get(city.countryId) || 0) + income
					)
				}

				const sanctionsList = Array.from(sanctions.entries()).flatMap(
					([fromId, toIds]) =>
						toIds.map(id => ({
							fromCountryId: fromId,
							toCountryId: id,
							gameId,
						}))
				)

				await tx.sanction.deleteMany({
					where: { gameId },
				})

				if (sanctionsList.length > 0) {
					await tx.sanction.createMany({
						data: sanctionsList,
					})
				}

				const newEcology = Math.min(100, game.ecology + ecologyDelta)

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
						const update = updatesMap.get(city.id)

						const attacksCount = update?.attacks ?? 0
						const hasShield = update?.shield ?? false
						const isDeveloped = update?.dev ?? false

						let finalProtection = city.protection

						if (hasShield) {
							finalProtection = 2
						}

						finalProtection -= attacksCount

						const development = city.development + (isDeveloped ? 20 : 0)

						if (finalProtection <= 0) {
							await tx.gameCity.update({
								where: { id: city.id },
								data: {
									life: 0,
									development: 0,
									protection: 0,
								},
							})
						} else {
							await tx.gameCity.update({
								where: { id: city.id },
								data: {
									protection: finalProtection,
									development,
									life: calculateLife({
										baseLife: city.template.baseLife,
										ecology: game.ecology,
										sanctionsCount: country._count.sanctionsTo,
										development,
									}),
								},
							})
						}
					}
				}
			},
			{
				timeout: 15000,
				maxWait: 5000,
			}
		)

		return Response.json({ ok: true })
	} catch (e) {
		console.error(e)
		return new Response('Internal error', { status: 500 })
	}
}
