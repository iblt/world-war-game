import { ENDPOINTS } from '@/constants'
import { apiFetch } from '@/lib/api'

export const createGame = async (data: { name: string; password: string }) => {
	const response = await apiFetch(ENDPOINTS.GAMES, {
		method: 'POST',
		body: JSON.stringify(data),
	})

	if (!response.ok) {
		throw new Error('Failed to create game')
	}

	return response.json()
}
