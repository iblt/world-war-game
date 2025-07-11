export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
export const SECRET_JWT_KEY = process.env.SECRET_JWT_KEY ?? 'baseSecret'

export const ENDPOINTS = {
	LOGIN: `${API_BASE_URL}/login`,
	REGISTER: `${API_BASE_URL}/register`,
	GAMES: `${API_BASE_URL}/games`,
} as const

export const COOKIES = {
	ACCESS_TOKEN: 'accessToken',
	REFRESH_TOKEN: 'refreshToken',
} as const
