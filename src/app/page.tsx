import { CreateGameButton } from '@/features/create-game'
import styles from './page.module.css'

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>Мировое господство</h1>
			<CreateGameButton />
		</main>
	)
}
