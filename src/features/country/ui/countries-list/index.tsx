import { Country, Game } from '@/types/api'
import clsx from 'clsx'
import styles from './CountriesList.module.scss'

export const CountriesList = ({
	game,
	myCountry,
	toggleCity,
	attackedCities,
	isPresident,
}: {
	game: Game
	myCountry: Country
	toggleCity: (id: string) => void
	attackedCities: string[]
	isPresident: boolean
}) => {
	const countries = game.countries.filter(
		country => country.players.length > 0 && country.id !== myCountry.id
	)

	return (
		<section className={styles.section}>
			<ul className={styles.countries}>
				{countries.map((country, i) => (
					<li key={i} className={styles.country}>
						{country.name}
						<ul className={styles.cities}>
							{country.cities.map(city => (
								<li
									key={city.id}
									className={clsx(styles.city, {
										[styles.destroyed]: city.protection < 1,
									})}
								>
									<p>{city.template.name}</p>
									<p>Уровень жизни {city.life}%</p>
									{isPresident && (
										<label className={styles.checkbox}>
											<input
												type='checkbox'
												onChange={() => toggleCity(city.id)}
												checked={attackedCities.includes(city.id)}
												disabled={
													city.protection < 1 ||
													myCountry.nukes <= attackedCities.length
												}
											/>
											Атаковать
										</label>
									)}
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</section>
	)
}
