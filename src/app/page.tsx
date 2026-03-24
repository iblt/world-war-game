import { JoinGameForm } from '@/features/join-game/ui/form'
import styles from './page.module.css'

export default function HomePage() {
	return (
		<main className={styles.page}>
			<JoinGameForm />
		</main>
	)
}
