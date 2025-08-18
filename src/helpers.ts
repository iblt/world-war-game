import cookie from 'js-cookie'
import { JwtPayload } from 'jsonwebtoken'
import { AUHTORIZATION_HEADER, COOKIES } from './constants'

export const getHeaders = () => {
	const token = cookie.get(COOKIES.ACCESS_TOKEN)
	const baseHeaders: Record<string, string> = {
		'Content-Type': 'application/json',
	}

	if (token) {
		baseHeaders[AUHTORIZATION_HEADER] = token
	}

	return baseHeaders
}

export const getErrorMessage = (error: unknown) => {
	if (!error) return ''
	if (typeof error === 'object' && 'message' in error) return error.message
	return String(error)
}

export const getUserIdByJwt = (data: string | JwtPayload): number => {
	if (typeof data === 'string') {
		try {
			const payload = JSON.parse(data)
			if ('id' in payload) return payload.id
		} catch {
			return 0
		}
	} else if ('id' in data && !isNaN(+data.id)) return data.id
	return 0
}
