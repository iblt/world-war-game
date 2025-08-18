import { ENDPOINTS } from '@/constants'
import { getHeaders } from '@/helpers'
import { apiFetch } from '@/lib/api'
import type { UserResponse } from '@/types/api'
import type {
	LoginBody,
	LoginResponse,
	RegisterBody,
	RegisterResponse,
} from './types'

export const register = async ({ name, password }: RegisterBody) => {
	const res = await fetch(ENDPOINTS.REGISTER, {
		method: 'POST',
		headers: getHeaders(),
		body: JSON.stringify({ name, password }),
	})
	if (!res.ok) throw new Error('Ошибка регистрации')
	const data = await res.json()

	return data as RegisterResponse
}

export const login = async ({ name, password }: LoginBody) => {
	const res = await fetch(ENDPOINTS.LOGIN, {
		method: 'POST',
		headers: getHeaders(),
		body: JSON.stringify({ name, password }),
	})
	if (!res.ok) throw new Error('Ошибка входа')
	const data = await res.json()

	return data as LoginResponse
}

export const getAuth = async () => {
	const res = await apiFetch(ENDPOINTS.GET_AUTH)
	if (!res.ok) {
		let errorMessage = `Ошибка авторизации (${res.status})`

		try {
			const errorData = await res.json()
			if (errorData?.error) {
				errorMessage = errorData.error
			}
		} catch {}

		throw new Error(errorMessage)
	}
	const data = await res.json()
	return data as UserResponse
}
