'use client'

import { getPlayerId } from '@/lib/cookie'
import { Game } from '@/types/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function CountrySelect({ game }: { game: Game }) {
	const qc = useQueryClient()

	const mutation = useMutation({
		mutationFn: async (countryId: string) => {
			await fetch('/api/game/select-country', {
				method: 'POST',
				body: JSON.stringify({
					gameId: game.id,
					countryId,
					playerId: getPlayerId(),
				}),
			})
		},
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ['game', game.id] })
		},
	})

	return (
		<div>
			<h2>Выберите страну</h2>

			{game.countries.map(c => (
				<button key={c.id} onClick={() => mutation.mutate(c.id)}>
					{c.name}
				</button>
			))}
		</div>
	)
}
