'use client'

import { getPlayerId } from '@/lib/cookie'
import { getNoun } from '@/lib/getNoun'
import { useGameResults } from '../../model/useResults'
import { Waiting } from '../waiting'
import styles from './Results.module.scss'

export const Results = ({ gameId }: { gameId: string }) => {
	const playerId = getPlayerId()
	const { data } = useGameResults(gameId, playerId)

	const turns = data?.turns

	if (!turns) return <Waiting text={'Загрузка...'} />

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
												🛡 Защищены:{' '}
												{country.actions.protectedCities.join(', ')}
											</li>
										)}

										{country.actions.attackedCities.length > 0 && (
											<li>
												🔥 Атакаваны:{' '}
												{country.actions.attackedCities.join(', ')}
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
												💲 Отправлены монеты:{' '}
												{country.actions.sendedMoney.map(
													(action, i) =>
														`${action.toCountry} ${action.amount} ${getNoun(
															action.amount,
															'монету',
															'монеты',
															'монет',
														)}${i === country.actions.sendedMoney.length - 1 ? '' : ', '}`,
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
