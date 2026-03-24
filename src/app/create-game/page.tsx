import { CreateGameForm } from '@/features/create-game/ui/form'
import styles from './create-game-page.module.scss'

export default function CreateGamePage() {
	return (
		<main className={styles.page}>
			<CreateGameForm />
		</main>
	)
}
