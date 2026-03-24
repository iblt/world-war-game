import { getPlayerId } from '@/lib/cookie'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useRoundControl(gameId: string) {
	const qc = useQueryClient()

	return useMutation({
		mutationFn: async () => {
			await fetch('/api/game/next-round', {
				method: 'POST',
				body: JSON.stringify({
					gameId,
					playerId: getPlayerId(),
				}),
			})
		},
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ['game', gameId] })
		},
	})
}
