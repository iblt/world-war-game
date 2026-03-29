import { useQuery } from '@tanstack/react-query'
import { getMyTurn } from './countryApi'

export function useMyTurn(gameId: string, round: number, playerId?: string) {
	return useQuery({
		queryKey: ['my-turn', gameId, playerId, round],
		queryFn: () => getMyTurn(gameId, playerId),
		enabled: !!playerId,
		staleTime: 1000 * 60,
	})
}
