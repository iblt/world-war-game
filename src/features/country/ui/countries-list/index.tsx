import { Country } from '@/types/api'
import clsx from 'clsx'
import styles from './CountriesList.module.scss'

export const CountriesList = ({
	countries,
	toggleCity,
	attackedCities,
	isPresident,
	nukes,
}: {
	countries: Country[]
	toggleCity: (id: string) => void
	attackedCities: string[]
	isPresident: boolean
	nukes: number
}) => {
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
													!attackedCities.includes(city.id) &&
													(city.protection < 1 ||
														nukes <= attackedCities.length)
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
