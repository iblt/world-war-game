'use client'

import { TurnsResult } from '@/types/api'
import { useQuery } from '@tanstack/react-query'

export function useGameResults(gameId: string, playerId: string | null) {
	return useQuery({
		queryKey: ['results', gameId, playerId],
		queryFn: async () => {
			const res = await fetch(`/api/game/turns`, {
				method: 'POST',
				body: JSON.stringify({
					gameId,
					playerId,
				}),
			})
			if (!res.ok) throw new Error('Ошибка загрузки')
			return res.json() as Promise<TurnsResult>
		},
	})
}
