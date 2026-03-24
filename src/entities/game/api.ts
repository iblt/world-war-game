import { ENDPOINTS } from '@/constants'
import { Game } from '@/generated/prisma-client'
import { apiFetch } from '@/lib/api'

export const createGame = async (data: {
	name: string
	password: string
	creatorId: number
}) => {
	const response = await apiFetch(ENDPOINTS.GAMES, {
		method: 'POST',
		body: JSON.stringify(data),
	})

	if (!response.ok) {
		throw new Error('Failed to create game')
	}

	return response.json()
}

export const getGameByGameId = async (gameId: number) => {
	const response = await apiFetch(`${ENDPOINTS.GAMES}/${gameId}`)

	if (!response.ok) {
		throw new Error('Failed to fetch game')
	}

	return response.json() as Promise<Game>
}

export const getGames = async () => {
	const response = await apiFetch(ENDPOINTS.GAMES)

	if (!response.ok) {
		throw new Error('Failed to fetch game')
	}

	return response.json() as Promise<Game[]>
}
