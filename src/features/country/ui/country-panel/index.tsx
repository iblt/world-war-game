'use client'

import { useState } from 'react'

import { Game } from '@/types/api'
import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'
import { calculateIncome, calculateLife } from '../../model/formulas'
import { useMyTurn } from '../../model/useMyTurn'

import { Button } from '@/ui/button'
import { IconRocket } from '@/ui/icons/Rocket'
import { IconShield } from '@/ui/icons/Shield'
import { GameTurn } from '@prisma/client'
import clsx from 'clsx'
import { Hammer, Radiation, Shield, Sprout } from 'lucide-react'
import { CountriesList } from '../countries-list'
import { SanctionsList } from '../sanctions-list'
import styles from './CountryPanel.module.scss'

const CITY_UPGRADE_PRICE = 150
const NUCLEAR_PROGRAM_PRICE = 500
const NUKE_PRICE = 500
const ECOLOGY_PRICE = 200
const SHIELD_PRICE = 300
const MAX_NUKES = 5

export function CountryPanel({
	game,
	playerId,
}: {
	game: Game
	playerId?: string
}) {
	const [isSubmitted, setSubmitted] = useState(false)

	const [selectedCities, setSelectedCities] = useState<string[]>([])
	const [protectedCities, setProtectedCities] = useState<string[]>([])
	const [attackedCities, setAttackedCities] = useState<string[]>([])
	const [sanctionedCountries, setSanctionedCountries] = useState<string[]>(
		game.countries.find(
			country =>
				country.players.findIndex(player => player.playerId === playerId) > -1
		)?.sanctionsFrom ?? []
	)
	const [sendedMoney, setSendedMoney] = useState<
		{ toCountry: string; amount: number }[]
	>([])

	const [isEcologyProgram, setEcologyProgram] = useState(false)
	const [isNuclearProgram, setNuclearProgram] = useState(false)
	const [nukes, setNukes] = useState<number>(0)

	const { data: turnData } = useMyTurn(game.id, game.round, playerId)

	useEffect(() => {
		if (!turnData?.turn) return

		const turn: GameTurn = turnData.turn

		setSelectedCities(turn.updatedCities ? turn.updatedCities.split(',') : [])
		setSanctionedCountries(
			turn.sanctionedCountries ? turn.sanctionedCountries.split(',') : []
		)
		setSendedMoney(
			turn.sendedMoney
				? turn.sendedMoney.split(',').map(item => {
						const [toCountry, amount] = item.split(':')
						return { toCountry, amount: Number(amount) }
				  })
				: []
		)
		setAttackedCities(turn.attackedCities ? turn.attackedCities.split(',') : [])
		setProtectedCities(
			turn.protectedCities ? turn.protectedCities.split(',') : []
		)

		setNukes(turn.buildNukes || 0)
		setEcologyProgram(turn.ecoProgram || false)
		setSubmitted(!!turn.id)
	}, [turnData])

	const submitTurn = useMutation({
		mutationFn: async () => {
			if (allDisabled) return

			await fetch('/api/game/submit-turn', {
				method: 'POST',
				body: JSON.stringify({
					gameId: game.id,
					playerId,
					updatedCities: selectedCities.join(','),
					buildNukes: nukes,
					nuclearTechnology: isNuclearProgram,
					ecoProgram: isEcologyProgram,
					attackedCities: attackedCities.join(','),
					protectedCities: protectedCities.join(','),
					sanctionedCountries: sanctionedCountries.join(','),
					sendedMoney: sendedMoney
						.map(item => `${item.toCountry}:${item.amount}`)
						.join(','),
				}),
			})
		},
		onSuccess: () => setSubmitted(true),
	})

	if (!playerId) return null

	const myCountry = game.countries.find(c =>
		c.players.some(p => p.playerId === playerId)
	)

	if (!myCountry) {
		return <div className={styles.overlay}>Вы не выбрали страну</div>
	}

	const isDestroyed = !myCountry.cities.some(city => city.protection > 0)

	if (isDestroyed) {
		return <div className={styles.overlay}>Ваша страна уничтожена</div>
	}

	const isPresident = myCountry.players.some(
		p => p.playerId === playerId && p.isPresident
	)

	const allDisabled =
		isDestroyed || isSubmitted || submitTurn.isPending || !isPresident

	const toggleCity = (cityId: string) => {
		setSelectedCities(prev =>
			prev.includes(cityId)
				? prev.filter(id => id !== cityId)
				: [...prev, cityId]
		)
	}

	const toggleProtectCity = (cityId: string) => {
		setProtectedCities(prev =>
			prev.includes(cityId)
				? prev.filter(id => id !== cityId)
				: [...prev, cityId]
		)
	}

	const toggleSanctionCountry = (countryId: string) => {
		setSanctionedCountries(prev =>
			prev.includes(countryId)
				? prev.filter(id => id !== countryId)
				: [...prev, countryId]
		)
	}

	const toggleAttackCity = (cityId: string) => {
		setAttackedCities(prev =>
			prev.includes(cityId)
				? prev.filter(id => id !== cityId)
				: [...prev, cityId]
		)
	}

	const updateSendedMoney = (countryId: string, amount: string) => {
		setSendedMoney(prev => {
			const currentCountryMoney =
				sendedMoney.find(item => item.toCountry === countryId)?.amount || 0
			if (currentCountryMoney === Number(amount)) return prev
			const currentBudget = budget + currentCountryMoney
			const realAmount = Math.min(Number(amount), currentBudget)
			if (realAmount <= 0) {
				return prev.filter(item => item.toCountry !== countryId)
			}
			const existing = prev.find(item => item.toCountry === countryId)
			if (existing) {
				return prev.map(item =>
					item.toCountry === countryId ? { ...item, amount: realAmount } : item
				)
			}
			return [...prev, { toCountry: countryId, amount: realAmount }]
		})
	}

	const cities = myCountry.cities.map(city => {
		const life = calculateLife({
			baseLife: city.template.baseLife,
			ecology: game.ecology,
			sanctionsCount: myCountry.sanctionsTo.length,
			development: city.development,
		})

		const income = calculateIncome({
			life,
		})

		return {
			...city,
			calculatedLife: life,
			income,
		}
	})

	const avgLife =
		cities.length > 0
			? cities.reduce((acc, c) => acc + c.calculatedLife, 0) / cities.length
			: 0

	const totalIncome = cities.reduce((acc, c) => acc + c.income, 0)
	const budget =
		myCountry.budget -
		selectedCities.length * CITY_UPGRADE_PRICE -
		protectedCities.length * SHIELD_PRICE -
		nukes * NUKE_PRICE -
		(isNuclearProgram ? NUCLEAR_PROGRAM_PRICE : 0) -
		(isEcologyProgram ? ECOLOGY_PRICE : 0) -
		sendedMoney.reduce((acc, item) => acc + item.amount, 0)

	const handleRocketClick = (i: number) => {
		if (nukes === i + 1) {
			setNukes(i)
			return
		}

		const canBuyRockets = Math.max(
			0,
			Math.trunc((budget + nukes * NUKE_PRICE) / NUKE_PRICE)
		)

		setNukes(Math.min(i + 1, canBuyRockets))
	}

	const countries = game.countries.filter(
		country => country.players.length > 0 && country.id !== myCountry.id
	)

	return (
		<section className={styles.container}>
			<h2>
				{myCountry.name} (раунд {game.round})
			</h2>

			<section className={styles.top}>
				<ul className={styles.cities}>
					{cities.map(city => {
						const isSelected = selectedCities.includes(city.id)
						const isProtected = protectedCities.includes(city.id)

						return (
							<li
								key={city.id}
								className={clsx(styles.cityCard, {
									[styles.destroyed]: city.protection < 1,
								})}
							>
								{city.protection > 1 && (
									<IconShield size={32} className={styles.shield} />
								)}
								<div className={styles.cityName}>{city.template.name}</div>

								<div>Развитие: {city.development}%</div>
								<div>Ур. жизни: {city.calculatedLife.toFixed(0)}%</div>
								<div>Доход: {city.income.toFixed(0)}</div>

								{isPresident && (
									<>
										<label className={styles.checkbox}>
											<input
												type='checkbox'
												checked={isSelected}
												onChange={() => toggleCity(city.id)}
												disabled={
													allDisabled ||
													(!isSelected && budget < CITY_UPGRADE_PRICE)
												}
												hidden
											/>
											<Hammer
												size={24}
												fill={isSelected ? '#6178df63' : 'transparent'}
												strokeOpacity={
													allDisabled ||
													(!isSelected && budget < CITY_UPGRADE_PRICE)
														? 0.3
														: 1
												}
												stroke={isSelected ? '#1f3cc0' : 'currentColor'}
											/>
											Улучшить ({CITY_UPGRADE_PRICE})
										</label>
										<label className={styles.checkbox}>
											<input
												type='checkbox'
												checked={isProtected}
												onChange={() => toggleProtectCity(city.id)}
												disabled={
													(!isProtected && budget < SHIELD_PRICE) ||
													city.protection !== 1
												}
												hidden
											/>
											<Shield
												size={24}
												fill={isProtected ? '#5ce174' : 'transparent'}
												strokeOpacity={
													(!isProtected && budget < SHIELD_PRICE) ||
													city.protection !== 1
														? 0.3
														: 1
												}
												stroke={isEcologyProgram ? '#1fc03d' : 'currentColor'}
											/>
											Защитить ({SHIELD_PRICE})
										</label>
									</>
								)}
							</li>
						)
					})}
				</ul>

				<div className={styles.summary}>
					<div>Бомб: {myCountry.nukes} 🚀</div>
					<div>Бюджет: {budget.toFixed(0)} 💲</div>
					<div>Доход за раунд: {totalIncome.toFixed(0)} 💱</div>
					<div>Средний уровень жизни: {avgLife.toFixed(0)}% 💖</div>
				</div>
			</section>

			<div className={styles.nuclear}>
				<header className={styles.header}>
					{!myCountry.hasNuclearProgram && (
						<label className={styles.checkbox}>
							<input
								type='checkbox'
								onChange={() => setNuclearProgram(prev => !prev)}
								checked={myCountry.hasNuclearProgram || isNuclearProgram}
								disabled={
									allDisabled ||
									myCountry.hasNuclearProgram ||
									(!isNuclearProgram && NUCLEAR_PROGRAM_PRICE > budget)
								}
								hidden
							/>
							<Radiation
								size={24}
								fill={
									myCountry.hasNuclearProgram || isNuclearProgram
										? '#dbc0705f'
										: 'transparent'
								}
								strokeOpacity={
									allDisabled ||
									myCountry.hasNuclearProgram ||
									(!isNuclearProgram && NUCLEAR_PROGRAM_PRICE > budget)
										? 0.3
										: 1
								}
								stroke={
									myCountry.hasNuclearProgram || isNuclearProgram
										? '#c0981f'
										: 'currentColor'
								}
							/>
							Ядерная технология ({NUCLEAR_PROGRAM_PRICE})
						</label>
					)}
					<label className={styles.checkbox}>
						<input
							type='checkbox'
							onChange={() => setEcologyProgram(prev => !prev)}
							checked={isEcologyProgram}
							disabled={
								allDisabled || (!isEcologyProgram && ECOLOGY_PRICE > budget)
							}
							hidden
						/>
						<Sprout
							size={24}
							fill={isEcologyProgram ? '#5ce174' : 'transparent'}
							strokeOpacity={
								allDisabled || (!isEcologyProgram && ECOLOGY_PRICE > budget)
									? 0.3
									: 1
							}
							stroke={isEcologyProgram ? '#1fc03d' : 'currentColor'}
						/>
						Экологическая программа ({ECOLOGY_PRICE}) +15% к экологии
					</label>
				</header>
				{myCountry.hasNuclearProgram && (
					<>
						<h3>Создание бомб ({NUKE_PRICE} за каждую)</h3>
						<div className={styles.rockets}>
							{new Array(MAX_NUKES).fill('').map((_, i) => (
								<button
									key={i}
									type='button'
									onClick={() => handleRocketClick(i)}
									disabled={allDisabled || !myCountry.hasNuclearProgram}
									className={styles.rocket}
								>
									<IconRocket fill={nukes > i ? '#dd4a4a' : '#a7a4ba'} />
								</button>
							))}
						</div>
					</>
				)}
			</div>

			{!isPresident && <div>Только президент может управлять</div>}

			<SanctionsList
				countries={countries}
				allDisabled={allDisabled}
				sanctionsFrom={myCountry.sanctionsTo}
				sanctionedCountries={sanctionedCountries}
				toggleSanctionCountry={toggleSanctionCountry}
			/>

			<CountriesList
				nukes={myCountry.nukes}
				countries={countries}
				attackedCities={attackedCities}
				toggleCity={toggleAttackCity}
				isPresident={isPresident}
				allDisabled={allDisabled}
				sendedMoney={sendedMoney}
				updateSendedMoney={updateSendedMoney}
			/>

			{isPresident && (
				<div className={styles.actions}>
					<Button onClick={() => submitTurn.mutate()} disabled={allDisabled}>
						Сохранить решения
					</Button>
				</div>
			)}
		</section>
	)
}
