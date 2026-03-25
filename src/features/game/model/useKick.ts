'use client'

import { TurnsResult } from '@/types/api'
import { useMutation } from '@tanstack/react-query'

export function useKick(gameId: string) {
	return useMutation({
		mutationFn: async (gamePlayerId: string) => {
			const res = await fetch(`/api/game/kick-player`, {
				method: 'POST',
				body: JSON.stringify({
					gameId,
					gamePlayerId,
				}),
			})
			if (!res.ok) throw new Error('Ошибка загрузки')
			return res.json() as Promise<TurnsResult>
		},
	})
}
