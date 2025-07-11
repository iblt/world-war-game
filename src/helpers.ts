import cookie from 'js-cookie'
import { COOKIES } from './constants'

export const getHeaders = () => {
	const token = cookie.get(COOKIES.ACCESS_TOKEN)
	const baseHeaders: Record<string, string> = {
		'Content-Type': 'application/json',
	}

	if (token) {
		baseHeaders['Authorization'] = token
	}

	return baseHeaders
}
