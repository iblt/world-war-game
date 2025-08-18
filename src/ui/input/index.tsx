import clsx from 'clsx'
import type { InputHTMLAttributes } from 'react'
import styles from './input.module.scss'

export const Input = ({
	className,
	...props
}: InputHTMLAttributes<HTMLInputElement>) => {
	return <input className={clsx(styles.input, className)} {...props} />
}
