'use client'

import { pusherClient } from '@/lib/pusher-client'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'

export function useGameRealtime(gameId: string) {
	const queryClient = useQueryClient()

	useEffect(() => {
		const channel = pusherClient.subscribe(`game-${gameId}`)

		const refetch = () => {
			queryClient.invalidateQueries({
				queryKey: ['game', gameId],
			})
			queryClient.invalidateQueries({
				queryKey: ['turns-count', gameId],
			})
		}

		const events = [
			'player_joined',
			'player_left',
			'country_selected',
			'game_started',
			'round_started',
			'round_ended',
			'show_statistics',
			'round_paused',
			'round_resumed',
			'turn_submited',
		]

		events.forEach(event => {
			channel.bind(event, refetch)
		})

		return () => {
			channel.unbind_all()
			pusherClient.unsubscribe(`game-${gameId}`)
		}
	}, [gameId, queryClient])
}
