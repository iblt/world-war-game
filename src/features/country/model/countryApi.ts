'use server'

import { API_BASE_URL } from '@/constants'

export const getMyTurn = async (gameId: string, playerId?: string) => {
	const res = await fetch(`${API_BASE_URL}/game/my-turn`, {
		method: 'POST',
		body: JSON.stringify({ gameId, playerId }),
	})

	if (!res.ok) throw new Error('Ошибка')

	return res.json()
}
