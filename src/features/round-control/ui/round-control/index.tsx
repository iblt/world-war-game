'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRoundControl } from '../../model/useRoundControl'

import { Game } from '@/types/api'
import { useTurnsCount } from '../../model/useTurnsCount'
import styles from './RoundControl.module.scss'

export function RoundControl({
	game,
	playerId,
}: {
	game: Game
	playerId: string
}) {
	const qc = useQueryClient()

	const isHost = game.hostId === playerId

	const invalidate = () => {
		qc.invalidateQueries({ queryKey: ['game', game.id] })
	}

	const { data: turnsCountData } = useTurnsCount(game.id, game.round, playerId)

	const start = useMutation({
		mutationFn: async () => {
			await fetch('/api/game/start-round', {
				method: 'POST',
				body: JSON.stringify({
					gameId: game.id,
					playerId,
				}),
			})
		},
		onSuccess: invalidate,
	})

	const pause = useMutation({
		mutationFn: async () => {
			await fetch('/api/game/pause', {
				method: 'POST',
				body: JSON.stringify({
					gameId: game.id,
					playerId,
				}),
			})
		},
		onSuccess: invalidate,
	})

	const resume = useMutation({
		mutationFn: async () => {
			await fetch('/api/game/resume', {
				method: 'POST',
				body: JSON.stringify({
					gameId: game.id,
					playerId,
				}),
			})
		},
		onSuccess: invalidate,
	})

	const nextPhase = useRoundControl(game.id)

	if (!isHost) return null

	return (
		<div className={styles.buttons}>
			<p className={styles.ready}>Стран готово: {turnsCountData?.turnsCount}</p>

			<button
				onClick={() => start.mutate()}
				disabled={start.isPending || game.isPaused}
				className={styles.button}
			>
				Старт раунда
			</button>

			<button
				onClick={() => pause.mutate()}
				disabled={pause.isPending || game.isPaused}
				className={styles.button}
			>
				Пауза
			</button>

			<button
				onClick={() => resume.mutate()}
				disabled={resume.isPending || !game.isPaused}
				className={styles.button}
			>
				Продолжить
			</button>

			<button
				onClick={() => nextPhase.mutate()}
				className={styles.button}
				disabled={nextPhase.isPending}
			>
				Следующий этап →
			</button>
		</div>
	)
}
