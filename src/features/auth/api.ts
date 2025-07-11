import { ENDPOINTS } from '@/constants'
import { getHeaders } from '@/helpers'

export interface RegisterBody {
	name: string
	password: string
}

export const register = async (body: RegisterBody) => {
	try {
		const res = await fetch(ENDPOINTS.REGISTER, {
			method: 'POST',
			body: JSON.stringify(body),
			headers: getHeaders(),
		})

		return res.json()
	} catch (error) {
		console.error(error)
	}
}
