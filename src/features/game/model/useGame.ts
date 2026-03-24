'use client'

import { Game } from '@/types/api'
import { useQuery } from '@tanstack/react-query'

export function useGame(gameId: string) {
	return useQuery({
		queryKey: ['game', gameId],
		queryFn: async () => {
			const res = await fetch(`/api/game/${gameId}`)
			if (!res.ok) throw new Error('Ошибка загрузки')
			return res.json() as Promise<{ game: Game }>
		},
	})
}
