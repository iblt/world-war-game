'use server'

import { API_BASE_URL } from '@/constants'
import { Game } from '@/types/api'

export const getGame = async (gameId: string) => {
	const res = await fetch(`${API_BASE_URL}/game/${gameId}`)
	if (!res.ok) throw new Error('Ошибка загрузки')
	return res.json() as Promise<{ game: Game }>
}
