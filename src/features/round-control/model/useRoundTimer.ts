'use client'

import { Game } from '@/types/api'
import { useEffect, useState } from 'react'

export function useRoundTimer(game: Game) {
	const [timeLeft, setTimeLeft] = useState(0)

	useEffect(() => {
		if (!game.roundStartedAt) return

		const interval = setInterval(() => {
			if (game.isPaused) return

			const now = Date.now()
			const start = new Date(game.roundStartedAt ?? Date.now()).getTime()

			const elapsed = (now - start) / 1000
			const left = game.roundDuration - elapsed

			setTimeLeft(Math.max(0, Math.floor(left)))
		}, 1000)

		return () => clearInterval(interval)
	}, [game])

	return timeLeft
}
