'use client'

import { queryClient } from '@/lib/query'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { useMutation } from '@tanstack/react-query'
import { Controller, useForm } from 'react-hook-form'
import { register, RegisterBody } from '../api'
import { RegisterFormSchema } from '../schema'
import styles from './styles.module.scss'

export default function RegisterForm() {
	const { control, handleSubmit, formState } = useForm<RegisterBody>({
		resolver: valibotResolver(RegisterFormSchema),
		defaultValues: {
			name: '',
			password: '',
		},
	})

	const { mutateAsync: handleRegister } = useMutation({
		mutationFn: register,
		onMutate: () => {
			queryClient.refetchQueries({ queryKey: ['auth'] })
		},
	})

	const onSubmit = (formData: RegisterBody) => {
		handleRegister(formData)
	}

	return (
		<form className={styles.body} onSubmit={handleSubmit(onSubmit)}>
			<Controller
				control={control}
				name='name'
				render={({ field: { value, onChange } }) => (
					<input value={value} onChange={onChange} placeholder='Имя' />
				)}
			/>
			<Controller
				control={control}
				name='password'
				render={({ field: { value, onChange } }) => (
					<input
						value={value}
						onChange={onChange}
						placeholder='Пароль'
						type='password'
					/>
				)}
			/>
			<button type='submit' disabled={!formState.isValid}>
				Зарегистрироваться
			</button>
		</form>
	)
}
