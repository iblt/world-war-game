import LoginForm from '@/features/auth/ui/loginForm'
import styles from './login.module.scss'

export default function LoginPage() {
	return (
		<main className={styles.main}>
			<LoginForm />
		</main>
	)
}
