import type { UserResponse } from '@/types/api'

export interface LoginResponse {
	access: string
	user: UserResponse
}

export type RegisterResponse = LoginResponse

export interface RegisterBody {
	name: string
	password: string
}

export type LoginBody = RegisterBody
