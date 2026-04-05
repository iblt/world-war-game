'use client'

import { Game } from '@/types/api'
import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	LinearScale,
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Bar } from 'react-chartjs-2'

import clsx from 'clsx'
import styles from './UNStats.module.scss'

ChartJS.register(BarElement, CategoryScale, LinearScale, ChartDataLabels)

export const options = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		datalabels: {
			display: true,
			color: '#fff',
			anchor: 'center' as const,
			align: 'center' as const,
			font: {
				weight: 'bold' as const,
				size: 14,
			},
			formatter: (value: number) => `${value.toFixed(0)}%`,
		},
	},
}

export function UNStats({ game }: { game: Game }) {
	const countries = game.countries.filter(country => country.players.length > 0)
	const countriesStats = countries.map(country => {
		const avgLife =
			country.cities.length > 0
				? country.cities.reduce((acc, c) => acc + c.life, 0) / 4
				: 0

		return {
			name: country.name,
			life: avgLife,
		}
	})

	const chartData = {
		labels: countriesStats.map(c => c.name),
		datasets: [
			{
				label: 'Средний уровень жизни',
				data: countriesStats.map(c => c.life),
				backgroundColor: 'rgba(73, 101, 238, 0.758)',
			},
		],
	}

	const ecology = game.ecology.toFixed(0)
	const ecologyColor =
		game.ecology < 60 ? 'red' : game.ecology < 80 ? 'orange' : 'green'

	return (
		<div className={styles.container}>
			<h1>🌍 Генассамблея ООН</h1>

			<div className={styles.global}>
				<div>
					Экология: <span className={styles[ecologyColor]}>{ecology}%</span>
				</div>
				<div>Раунд: {game.round}</div>
			</div>

			<div className={styles.chart}>
				<Bar data={chartData} options={options} />
			</div>

			<div className={styles.countries}>
				{countries.map(country => (
					<div key={country.id} className={styles.country}>
						<h3>{country.name}</h3>

						{country.cities.map(city => (
							<div key={city.id} className={styles.city}>
								<span
									className={clsx({
										[styles.city__title_destroyed]: city.protection < 1,
									})}
								>
									{city.template.name}
								</span>

								{city.protection < 1 ? (
									<span className={styles.destroyed}>❌</span>
								) : (
									<span>❤️ {city.life.toFixed(0)}%</span>
								)}
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	)
}
