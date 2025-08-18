'use client'

import clsx from 'clsx'
import styles from './auth.module.scss'

interface AuthLayoutProps extends React.FormHTMLAttributes<HTMLFormElement> {
	title: string
}

export default function AuthLayout({
	title,
	children,
	className,
	...props
}: AuthLayoutProps) {
	return (
		<form className={clsx(styles.form, className)} {...props}>
			<h1 className={styles.title}>{title}</h1>
			{children}
		</form>
	)
}
