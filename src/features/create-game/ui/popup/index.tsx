import { ROUTES } from '@/constants'
import { createGame } from '@/entities/game/api'
import { Button } from '@/ui/button'
import { Input } from '@/ui/input'
import { Popup } from '@/ui/popup'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import styles from './create-game-popup.module.scss'

interface CreateGamePopupProps {
	onClose: () => void
}

export const CreateGamePopup = ({ onClose }: CreateGamePopupProps) => {
	const router = useRouter()
	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			name: '',
			password: '',
		},
	})
	const { mutateAsync } = useMutation({
		mutationFn: createGame,
		onSuccess: () => {
			reset()
			onClose()
		},
	})

	const onSubmit = async (data: { name: string; password: string }) => {
		const game = await mutateAsync(data)
		router.push(`${ROUTES.GAMES}/${game.id}`)
	}

	return (
		<Popup onClose={onClose}>
			<form className={styles.createGameForm} onSubmit={handleSubmit(onSubmit)}>
				<h2>Создать игру</h2>

				<label>
					Название игры
					<Controller
						name={'name'}
						control={control}
						render={({ field: { value, onChange } }) => (
							<Input
								type='text'
								value={value}
								onChange={onChange}
								required
								autoComplete='name'
							/>
						)}
					/>
				</label>

				<label>
					Пароль
					<Controller
						name={'password'}
						control={control}
						render={({ field: { value, onChange } }) => (
							<Input
								type='password'
								value={value}
								onChange={onChange}
								required
								autoComplete='new-password'
							/>
						)}
					/>
				</label>

				<Button type='submit'>Создать</Button>
			</form>
		</Popup>
	)
}
