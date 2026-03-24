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
import { CountriesList } from '../countries-list'
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

	const [isEcologyProgram, setEcologyProgram] = useState(false)
	const [isNuclearProgram, setNuclearProgram] = useState(false)
	const [nukes, setNukes] = useState<number>(0)

	const { data: turnData } = useMyTurn(game.id, game.round, playerId)

	useEffect(() => {
		if (!turnData?.turn) return

		const turn: GameTurn = turnData.turn

		setSelectedCities(turn.updatedCities ? turn.updatedCities.split(',') : [])

		setNukes(turn.buildNukes || 0)
		setEcologyProgram(turn.ecoProgram || false)
		setSubmitted(!!turn.id)
	}, [turnData])

	const submitTurn = useMutation({
		mutationFn: async () => {
			if (isDestroyed) return

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

	const allDisabled = isDestroyed || isSubmitted || submitTurn.isPending

	const isPresident = myCountry.players.some(
		p => p.playerId === playerId && p.isPresident
	)

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

	const toggleAttackCity = (cityId: string) => {
		setAttackedCities(prev =>
			prev.includes(cityId)
				? prev.filter(id => id !== cityId)
				: [...prev, cityId]
		)
	}

	const cities = myCountry.cities.map(city => {
		const life = calculateLife({
			baseLife: city.life,
			ecology: game.ecology,
			sanctionsCount: 0,
		})

		const income = calculateIncome({
			life,
			development: city.development,
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
		(isEcologyProgram ? ECOLOGY_PRICE : 0)

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

	return (
		<div className={styles.container}>
			<h2>{myCountry.name}</h2>

			<div className={styles.cities}>
				{cities.map(city => {
					const isSelected = selectedCities.includes(city.id)
					const isProtected = protectedCities.includes(city.id)

					return (
						<div
							key={city.id}
							className={clsx(styles.cityCard, {
								[styles.destroyed]: city.protection < 1,
							})}
						>
							{city.protection > 1 && <IconShield className={styles.shield} />}
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
										/>
										Защитить город ({SHIELD_PRICE})
									</label>
								</>
							)}
						</div>
					)
				})}
			</div>

			<div className={styles.nuclear}>
				<header className={styles.header}>
					<label className={styles.checkbox}>
						<input
							type='checkbox'
							onChange={() => setNuclearProgram(prev => !prev)}
							checked={myCountry.hasNuclearProgram || isNuclearProgram}
							disabled={allDisabled || myCountry.hasNuclearProgram}
						/>
						Ядерная технология ({NUCLEAR_PROGRAM_PRICE})
					</label>
					<label className={styles.checkbox}>
						<input
							type='checkbox'
							onChange={() => setEcologyProgram(prev => !prev)}
							checked={isEcologyProgram}
							disabled={
								allDisabled || (!isEcologyProgram && ECOLOGY_PRICE > budget)
							}
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
									<IconRocket fill={nukes > i ? '#dd6060' : '#a7a4ba'} />
								</button>
							))}
						</div>
					</>
				)}
			</div>

			<div className={styles.summary}>
				<div>Средний уровень жизни: {avgLife.toFixed(0)}% 💖</div>
				<div>Доход за раунд: {totalIncome.toFixed(0)} 💱</div>
				<div>Бомб: {myCountry.nukes} 🚀</div>
				<div>Бюджет: {budget.toFixed(0)} 💲</div>
			</div>

			{isPresident && (
				<div className={styles.actions}>
					<Button onClick={() => submitTurn.mutate()} disabled={allDisabled}>
						Сохранить решения
					</Button>
				</div>
			)}

			{!isPresident && <div>Только президент может управлять</div>}
			<CountriesList
				game={game}
				myCountry={myCountry}
				attackedCities={attackedCities}
				toggleCity={toggleAttackCity}
				isPresident={isPresident}
			/>
		</div>
	)
}
