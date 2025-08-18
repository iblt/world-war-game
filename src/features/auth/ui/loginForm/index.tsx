'use client'

import { ROUTES } from '@/constants'
import { Button } from '@/ui/button'
import { Input } from '@/ui/input'
import { valibotResolver } from '@hookform/resolvers/valibot'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { useLogin } from '../../model/hooks'
import { RegisterFormSchema } from '../../model/schema'
import { RegisterBody } from '../../model/types'
import AuthLayout from '../authLayout'

export default function LoginForm() {
	const router = useRouter()
	const { control, handleSubmit, formState } = useForm<RegisterBody>({
		resolver: valibotResolver(RegisterFormSchema),
		defaultValues: {
			name: '',
			password: '',
		},
	})
	const { mutateAsync } = useLogin()

	const onSubmit = async (formData: RegisterBody) => {
		const data = await mutateAsync(formData)
		if (data) return router.push(ROUTES.HOME)
	}

	return (
		<AuthLayout onSubmit={handleSubmit(onSubmit)} title='Вход'>
			<Controller
				control={control}
				name='name'
				render={({ field: { value, onChange } }) => (
					<Input value={value} onChange={onChange} placeholder='Имя' />
				)}
			/>
			<Controller
				control={control}
				name='password'
				render={({ field: { value, onChange } }) => (
					<Input
						value={value}
						onChange={onChange}
						placeholder='Пароль'
						type='password'
					/>
				)}
			/>
			<Button type='submit' disabled={!formState.isValid}>
				Войти
			</Button>
			<p>
				Нет аккаунта? <Link href={ROUTES.REGISTER}>Зарегистрироваться</Link>
			</p>
		</AuthLayout>
	)
}
