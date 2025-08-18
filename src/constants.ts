export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
export const SECRET_JWT_KEY = process.env.SECRET_JWT_KEY ?? 'baseSecret'

export const ROUTES = {
	HOME: '/',
	LOGIN: `/login`,
	REGISTER: `/register`,
	GAMES: `/games`,
} as const

export const ENDPOINTS = {
	LOGIN: `${API_BASE_URL}/auth/login`,
	REGISTER: `${API_BASE_URL}/auth/register`,
	REFRESH: `${API_BASE_URL}/auth/refresh`,
	GAMES: `${API_BASE_URL}/games`,
	GET_AUTH: `${API_BASE_URL}/auth/get-user`,
} as const

export const COOKIES = {
	ACCESS_TOKEN: 'access',
	REFRESH_TOKEN: 'refresh',
} as const

export const AUHTORIZATION_HEADER = 'Authorization'

export const QUERY_KEYS = {
	USER: 'user',
}
