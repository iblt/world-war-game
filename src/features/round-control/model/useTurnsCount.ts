import { useQuery } from '@tanstack/react-query'

export function useTurnsCount(
	gameId: string,
	round: number,
	playerId?: string
) {
	return useQuery({
		queryKey: ['turns-count', gameId, round],
		queryFn: async () => {
			const res = await fetch('/api/game/current-turns-count', {
				method: 'POST',
				body: JSON.stringify({ gameId, playerId }),
			})

			if (!res.ok) throw new Error('Ошибка')

			return res.json() as Promise<{ turnsCount: number }>
		},
		enabled: !!playerId,
	})
}
