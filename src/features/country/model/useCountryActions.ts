import { getPlayerId } from '@/lib/cookie'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useCountryActions(gameId: string) {
	const qc = useQueryClient()

	const develop = useMutation({
		mutationFn: async () => {
			await fetch('/api/game/develop', {
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

	const nuke = useMutation({
		mutationFn: async () => {
			await fetch('/api/game/nuke', {
				method: 'POST',
			})
		},
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ['game', gameId] })
		},
	})

	return {
		develop,
		nuke,
	}
}
