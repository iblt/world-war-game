import { GameScreen } from '@/features/game/ui/game-screen'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function GamePage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params
	const cookieStorage = await cookies()

	if (!cookieStorage.get('playerId')?.value) {
		return redirect('/')
	}

	return (
		<main>
			<GameScreen gameId={id} />
		</main>
	)
}
