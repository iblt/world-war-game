import { HTMLAttributes, ReactNode } from 'react'
import styles from './popup.module.scss'

interface PopupProps extends HTMLAttributes<HTMLDivElement> {
	onClose: () => void
	children: ReactNode
}

export const Popup = ({ onClose, children, ...props }: PopupProps) => {
	return (
		<div className={styles.popup__overlay} onClick={onClose}>
			<div
				className={styles.popup__body}
				onClick={e => e.stopPropagation()}
				{...props}
			>
				<button className={styles.popup__close} onClick={onClose}>
					✕
				</button>
				{children}
			</div>
		</div>
	)
}
