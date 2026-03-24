import { setPlayerId } from '@/lib/cookie'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export function useJoinGame() {
	const router = useRouter()

	return useMutation({
		mutationFn: async (data: { playerName: string; code: string }) => {
			const res = await fetch('/api/game/join', {
				method: 'POST',
				body: JSON.stringify(data),
			})

			if (!res.ok) throw new Error('Ошибка входа')

			return res.json()
		},

		onSuccess: data => {
			setPlayerId(data.playerId)
			router.push(`/game/${data.gameId}`)
		},
	})
}
