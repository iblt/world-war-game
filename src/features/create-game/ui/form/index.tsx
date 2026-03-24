'use client'

import { valibotResolver } from '@hookform/resolvers/valibot'
import { useForm } from 'react-hook-form'

import { CreateGameInput, createGameSchema } from '../../model/schema'
import { useCreateGame } from '../../model/useCreateGame'

import { Button } from '@/ui/button'
import { Input } from '@/ui/input'
import styles from './CreateGameForm.module.scss'

export function CreateGameForm() {
	const mutation = useCreateGame()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateGameInput>({
		resolver: valibotResolver(createGameSchema),
	})

	const onSubmit = (data: CreateGameInput) => {
		mutation.mutate(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<h2>Создать игру</h2>

			<Input
				{...register('playerName')}
				placeholder='Ваше имя'
				className={styles.input}
			/>

			{errors.playerName && (
				<p className={styles.error}>{errors.playerName.message}</p>
			)}

			<Button
				type='submit'
				disabled={mutation.isPending}
				className={styles.button}
			>
				{mutation.isPending ? 'Создание...' : 'Создать игру'}
			</Button>
		</form>
	)
}
