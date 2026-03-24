'use client'

import { Game } from '@/types/api'
import { useRoundTimer } from '../../model/useRoundTimer'
import styles from './RoundTimer.module.scss'

export function RoundTimer({ game }: { game: Game }) {
	const timeLeft = useRoundTimer(game)

	const minutes = Math.floor(timeLeft / 60)
	const seconds = String(timeLeft % 60).padStart(2, '0')

	return (
		<div className={styles.timer}>
			⏱ {minutes}:{seconds}
			{game.isPaused && ' (Пауза)'}
		</div>
	)
}
