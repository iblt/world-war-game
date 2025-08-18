import { QUERY_KEYS } from '@/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { getAuth, login, register } from './api'

export const useLogin = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: login,
		onSuccess: data => {
			queryClient.setQueryData([QUERY_KEYS.USER], data.user)
		},
	})
}

export const useRegister = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: register,
		onSuccess: data => {
			queryClient.setQueryData([QUERY_KEYS.USER], data.user)
		},
	})
}

export const useAuth = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: getAuth,
		onSuccess: data => {
			queryClient.setQueryData([QUERY_KEYS.USER], data)
		},
	})
}
