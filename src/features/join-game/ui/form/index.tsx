'use client'

import { valibotResolver } from '@hookform/resolvers/valibot'
import { useForm } from 'react-hook-form'

import { JoinGameInput, joinGameSchema } from '../../model/schema'
import { useJoinGame } from '../../model/useJoinGame'

import { Button } from '@/ui/button'
import { Input } from '@/ui/input'
import styles from './JoinGameForm.module.scss'

export function JoinGameForm() {
	const mutation = useJoinGame()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<JoinGameInput>({
		resolver: valibotResolver(joinGameSchema),
	})

	return (
		<form
			onSubmit={handleSubmit(data => mutation.mutate(data))}
			className={styles.form}
		>
			<h1>Вход в игру</h1>

			<Input {...register('playerName')} placeholder='Ваше имя' />

			{errors.playerName && <p>{errors.playerName.message}</p>}

			<Input
				{...register('code')}
				onChange={e => {
					e.target.value = e.target.value.toLocaleUpperCase()
					register('code').onChange(e)
				}}
				placeholder='Код комнаты'
			/>

			{errors.code && <p>{errors.code.message}</p>}

			<Button disabled={mutation.isPending}>
				{mutation.isPending ? 'Вход...' : 'Войти'}
			</Button>
		</form>
	)
}
