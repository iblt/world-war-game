'use client'

import { ROUTES } from '@/constants'
import { Button } from '@/ui/button'
import { Input } from '@/ui/input'
import { valibotResolver } from '@hookform/resolvers/valibot'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { useRegister } from '../../model/hooks'
import { RegisterFormSchema } from '../../model/schema'
import { RegisterBody } from '../../model/types'
import AuthLayout from '../authLayout'

export default function RegisterForm() {
	const router = useRouter()
	const { mutateAsync } = useRegister()
	const { control, handleSubmit, formState } = useForm<RegisterBody>({
		resolver: valibotResolver(RegisterFormSchema),
		defaultValues: {
			name: '',
			password: '',
		},
	})

	const onSubmit = async (formData: RegisterBody) => {
		const data = await mutateAsync(formData)
		if (data) return router.push(ROUTES.HOME)
	}

	return (
		<AuthLayout onSubmit={handleSubmit(onSubmit)} title='Регистрация'>
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
				Зарегистрироваться
			</Button>
			<p>
				Есть аккаунт? <Link href={ROUTES.LOGIN}>Войти</Link>
			</p>
		</AuthLayout>
	)
}
