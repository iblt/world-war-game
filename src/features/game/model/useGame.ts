'use client'

import { useQuery } from '@tanstack/react-query'
import { getGame } from './gameApi'

export function useGame(gameId: string) {
	return useQuery({
		queryKey: ['game', gameId],
		queryFn: () => getGame(gameId),
		staleTime: 1000 * 60,
	})
}
