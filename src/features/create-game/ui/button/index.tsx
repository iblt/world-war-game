'use client'

import { useAuth } from '@/features/auth'
import { Button } from '@/ui/button'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { CreateGamePopup } from '../popup'
import styles from './create-game-button.module.scss'

export const CreateGameButton = () => {
	const { data: user } = useAuth()
	const [isOpen, setIsOpen] = useState(false)
	if (!user) return
	const handleOpen = () => setIsOpen(true)
	const handleClose = () => setIsOpen(false)

	return (
		<Button className={styles.button} onClick={handleOpen}>
			Создать игру
			<Plus />
			{isOpen &&
				createPortal(<CreateGamePopup onClose={handleClose} />, document.body)}
		</Button>
	)
}
