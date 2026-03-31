'use client'

import { getPlayerId } from '@/lib/cookie'
import { getNoun } from '@/lib/getNoun'
import { useGameResults } from '../../model/useResults'
import styles from './Results.module.scss'

export const Results = ({ gameId }: { gameId: string }) => {
	const playerId = getPlayerId()
	const { data } = useGameResults(gameId, playerId)

	const turns = data?.turns

	if (!turns) return <div>Загрузка...</div>

	return (
		<div className={styles.body}>
			<h1>📜 Итоги игры</h1>

			<ul className={styles.rounds}>
				{turns.map(turn => (
					<li key={turn.round} className={styles.round}>
						<h2>Раунд {turn.round}</h2>

						<ul className={styles.countries}>
							{turn.countries.map(country => (
								<li key={country.countryName} className={styles.country}>
									<h3>{country.countryName}</h3>

									<ul className={styles.actions}>
										{country.actions.buildNukes > 0 && (
											<li>💣 Построено бомб: {country.actions.buildNukes}</li>
										)}

										{country.actions.nuclearTechnology && (
											<li>☢️ Разработана ядерная технология</li>
										)}

										{country.actions.ecoProgram && (
											<li>🌱 Экологическая программа</li>
										)}

										{country.actions.updatedCities.length > 0 && (
											<li>
												🏙 Улучшены: {country.actions.updatedCities.join(', ')}
											</li>
										)}

										{country.actions.protectedCities.length > 0 && (
											<li>
												🛡 Защита: {country.actions.protectedCities.join(', ')}
											</li>
										)}

										{country.actions.attackedCities.length > 0 && (
											<li>
												🔥 Атака: {country.actions.attackedCities.join(', ')}
											</li>
										)}

										{country.actions.sanctionedCountries.length > 0 && (
											<li>
												📉 Санкции против:{' '}
												{country.actions.sanctionedCountries.join(', ')}
											</li>
										)}

										{country.actions.sendedMoney.length > 0 && (
											<li>
												📉 Отправлены монеты:{' '}
												{country.actions.sendedMoney.map(
													action =>
														`${action.toCountry} ${action.amount} ${getNoun(action.amount, 'монету', 'монеты', 'монет')}`,
												)}
											</li>
										)}
									</ul>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	)
}
