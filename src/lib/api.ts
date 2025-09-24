import { ENDPOINTS } from '@/constants'
import { getHeaders } from '@/helpers'

/**
 * Обёртка над fetch с авто-рефрешем токена
 */
export async function apiFetch(
	input: RequestInfo | URL,
	init?: RequestInit
): Promise<Response> {
	const headers = getHeaders()

	console.log(headers)

	// Первый запрос
	let res = await fetch(input, {
		...init,
		credentials: 'include', // важно, чтобы куки передавались
		headers,
	})

	// Если access истёк → пробуем refresh
	if (res.status === 401) {
		const refreshRes = await fetch(ENDPOINTS.REFRESH, {
			method: 'POST',
			credentials: 'include',
			headers,
		})

		// refresh успешный → повторяем исходный запрос
		if (refreshRes.ok) {
			res = await fetch(input, {
				...init,
				credentials: 'include',
				headers,
			})
		} else {
			// refresh не сработал → кидаем ошибку
			throw new Error('Сессия истекла. Пожалуйста, войдите снова.')
		}
	}

	return res
}
