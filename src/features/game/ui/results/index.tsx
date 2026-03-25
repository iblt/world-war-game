'use client'

import { getPlayerId } from '@/lib/cookie'
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

			{turns.map(turn => (
				<div key={turn.round} className={styles.round}>
					<h2>Раунд {turn.round}</h2>

					<div className={styles.countries}>
						{turn.countries.map(country => (
							<div key={country.countryName} className={styles.country}>
								<h3>{country.countryName}</h3>

								<ul>
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
								</ul>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	)
}
