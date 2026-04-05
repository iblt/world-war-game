import { Country } from '@/types/api'
import clsx from 'clsx'
import { Rocket } from 'lucide-react'
import styles from './CountriesList.module.scss'

export const CountriesList = ({
	countries,
	toggleCity,
	attackedCities,
	isPresident,
	nukes,
	allDisabled,
	updateSendedMoney,
	sendedMoney,
}: {
	countries: Country[]
	toggleCity: (id: string) => void
	attackedCities: string[]
	isPresident: boolean
	nukes: number
	allDisabled: boolean
	updateSendedMoney: (countryId: string, amount: string) => void
	sendedMoney: { toCountry: string; amount: number }[]
}) => {
	return (
		<section className={styles.section}>
			<ul className={styles.countries}>
				{countries.map((country, i) => (
					<li key={i} className={styles.country}>
						<header className={styles.header}>
							<span>{country.name}</span>
							<label className={styles.sendCoins}>
								<span>Отправить монеты</span>
								<input
									type='text'
									inputMode='numeric'
									pattern='[0-9]*'
									value={
										sendedMoney.find(item => item.toCountry === country.id)
											?.amount || ''
									}
									onChange={e => {
										updateSendedMoney(
											country.id,
											e.target.value.replace(/\D/g, '')
										)
									}}
									className={styles.sendCoins__input}
									disabled={allDisabled}
								/>
							</label>
						</header>
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
												hidden
											/>
											<Rocket
												size={24}
												fill={
													attackedCities.includes(city.id)
														? '#e15c5c'
														: 'transparent'
												}
												strokeOpacity={
													!attackedCities.includes(city.id) &&
													(city.protection < 1 ||
														nukes <= attackedCities.length)
														? 0.3
														: 1
												}
												stroke={
													attackedCities.includes(city.id)
														? '#c01f1f'
														: 'currentColor'
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
