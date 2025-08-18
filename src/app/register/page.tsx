import RegisterForm from '@/features/auth/ui/registerForm'
import styles from './register.module.scss'

export default function RegisterPage() {
	return (
		<main className={styles.main}>
			<RegisterForm />
		</main>
	)
}
