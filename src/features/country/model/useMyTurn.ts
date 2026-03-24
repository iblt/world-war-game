import { useQuery } from '@tanstack/react-query'

export function useMyTurn(gameId: string, round: number, playerId?: string) {
	return useQuery({
		queryKey: ['my-turn', gameId, playerId, round],
		queryFn: async () => {
			const res = await fetch('/api/game/my-turn', {
				method: 'POST',
				body: JSON.stringify({ gameId, playerId }),
			})

			if (!res.ok) throw new Error('Ошибка')

			return res.json()
		},
		enabled: !!playerId,
	})
}
