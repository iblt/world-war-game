import { Country } from '@/types/api'
import styles from './SanctionsList.module.scss'

interface SanctionsListProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLElement>,
		HTMLElement
	> {
	sanctionsFrom: string[]
	countries: Country[]
	sanctionedCountries: string[]
	toggleSanctionCountry: (id: string) => void
	allDisabled: boolean
}

export const SanctionsList = ({
	sanctionsFrom,
	countries,
	sanctionedCountries,
	toggleSanctionCountry,
	allDisabled,
	...props
}: SanctionsListProps) => {
	return (
		<section className={styles.section} {...props}>
			<div className={styles.block}>
				<p>Санкции наложили:</p>
				<ul className={styles.list}>
					{countries.map(country => (
						<li key={country.id} className={styles.country}>
							<p>{country.name}</p>
							<p>{sanctionedCountries.includes(country.id) ? 'Да' : 'Нет'}</p>
						</li>
					))}
				</ul>
			</div>
			<div className={styles.block}>
				<p>Наложить санкции</p>
				<ul className={styles.list}>
					{countries.map(country => (
						<li key={country.id}>
							<label className={styles.country}>
								{country.name}

								<input
									className={styles.checkbox}
									type='checkbox'
									id={country.id}
									onChange={() => toggleSanctionCountry(country.id)}
									checked={sanctionsFrom.includes(country.id)}
									disabled={allDisabled}
								/>
							</label>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
