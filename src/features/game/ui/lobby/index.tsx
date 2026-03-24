'use client'

import { getPlayerId } from '@/lib/cookie'
import { Game } from '@/types/api'
import { Button } from '@/ui/button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import styles from './Lobby.module.scss'

export function Lobby({ game }: { game: Game }) {
	const qc = useQueryClient()

	const playerId = getPlayerId()
	const mutation = useMutation({
		mutationFn: async (countryId: string) => {
			await fetch('/api/game/select-country', {
				method: 'POST',
				body: JSON.stringify({
					gameId: game.id,
					countryId,
					playerId,
				}),
			})
		},
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ['game', game.id] })
		},
	})

	const waitingPlayers = game.players.filter(p => !p.countryId)

	return (
		<div className={styles.main}>
			<div>
				<h3>Код: {game.joinCode}</h3>
				<h2>Выберите страну</h2>

				<ul className={styles.countries}>
					{game.countries.map(c => {
						const hasPresident = c.players.some(p => p.isPresident)

						return (
							<li key={c.id} className={styles.country}>
								<header className={styles.country__header}>
									<b>{c.name}</b>
									<Button
										disabled={
											hasPresident &&
											c.players.findIndex(
												player => player.playerId === playerId
											) > -1
										}
										onClick={() => mutation.mutate(c.id)}
										className={styles.button}
									>
										{hasPresident ? 'Присоединиться' : 'Стать президентом'}
									</Button>
								</header>

								{c.players.map(p => (
									<div key={p.id}>
										{p.name}
										{p.isPresident && ' 👑'}
									</div>
								))}
							</li>
						)
					})}
				</ul>
			</div>

			<div className={styles.waitList}>
				<h4>Ожидание</h4>

				{waitingPlayers.map(p => (
					<div key={p.id}>{p.name}</div>
				))}
			</div>
		</div>
	)
}
