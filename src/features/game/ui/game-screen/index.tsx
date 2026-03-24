'use client'

import { useEffect, useState } from 'react'

import { CountryPanel } from '@/features/country/ui/country-panel'
import { useGame } from '../../model/useGame'
import { useGameRealtime } from '../../model/useGameRealtime'
import styles from './GameScreen.module.scss'

import { RoundControl } from '@/features/round-control/ui/round-control'
import { RoundTimer } from '@/features/round-control/ui/round-timer'
import { getPlayerId } from '@/lib/cookie'
import { GamePhase } from '@prisma/client'
import { Lobby } from '../lobby'
import { UNStats } from '../un-stats'
import { Waiting } from '../waiting'

export function GameScreen({ gameId }: { gameId: string }) {
	const { data, isLoading } = useGame(gameId)

	useGameRealtime(gameId)

	const [playerId, setPlayerId] = useState<string | null>(null)

	useEffect(() => {
		setPlayerId(getPlayerId())
	}, [])

	if (isLoading) return <div>Загрузка...</div>
	if (!data) return <div>Ошибка</div>

	if (!playerId) return <div>Инициализация...</div>

	const { game } = data

	return (
		<main className={styles.main}>
			<RoundControl game={game} playerId={playerId} />
			<RoundTimer game={game} />

			{(() => {
				switch (game.phase) {
					case GamePhase.LOBBY:
						return <Lobby game={game} />

					case GamePhase.COUNTRY_MANAGEMENT:
						return <CountryPanel game={game} playerId={playerId} />

					case GamePhase.WAITING_UN:
						return <Waiting text='Отправляйтесь на заседание ООН' />

					case GamePhase.UN_STATS:
						return <UNStats game={game} />

					default:
						return <div>Неизвестная фаза</div>
				}
			})()}
		</main>
	)
}
