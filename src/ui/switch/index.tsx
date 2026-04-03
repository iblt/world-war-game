'use client'

import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import styles from './switch.module.scss'

interface SwitchProps {
	/** Состояние переключателя (управляемый режим) */
	checked?: boolean
	/** Колбэк при изменении состояния */
	onChange?: (checked: boolean) => void
	/** Отключен ли переключатель */
	disabled?: boolean
	/** Размер переключателя */
	size?: 'small' | 'medium' | 'large'
	/** Цветовая схема для UI переключателя */
	color?: 'primary' | 'secondary' | 'success' | 'danger'
	/** Дополнительный CSS класс */
	className?: string
	/** Текст слева от переключателя */
	label?: string
	/** Расположение текста */
	labelPosition?: 'left' | 'right'
}

const Switch: React.FC<SwitchProps> = ({
	checked: controlledChecked,
	onChange,
	disabled = false,
	size = 'medium',
	color = 'primary',
	className = '',
	label,
	labelPosition = 'right',
}) => {
	// Функция для определения предпочтений пользователя
	const getSystemPreference = (): boolean => {
		return window.matchMedia('(prefers-color-scheme: dark)').matches
	}

	// Функция для получения начального состояния темы
	const getInitialTheme = (): boolean => {
		// Проверяем сохраненную тему в localStorage
		const savedTheme = localStorage.getItem('theme')
		if (savedTheme !== null) {
			return savedTheme === 'dark'
		}

		// Если нет сохраненной темы, используем системные предпочтения
		return getSystemPreference()
	}

	const [internalChecked, setInternalChecked] = useState(getInitialTheme())

	// Определяем, управляемый или неуправляемый компонент
	const isControlled = controlledChecked !== undefined
	const currentChecked = isControlled ? controlledChecked : internalChecked

	// Применяем тему к html элементу
	const applyTheme = (isDark: boolean) => {
		const htmlElement = document.documentElement

		if (isDark) {
			htmlElement.classList.add('dark')
			htmlElement.classList.remove('light')
			localStorage.setItem('theme', 'dark')
		} else {
			htmlElement.classList.add('light')
			htmlElement.classList.remove('dark')
			localStorage.setItem('theme', 'light')
		}
	}

	// Эффект для начальной установки темы
	useEffect(() => {
		applyTheme(currentChecked)
	}, [])

	// Следим за изменением системных предпочтений
	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

		const handleSystemThemeChange = (e: MediaQueryListEvent) => {
			// Меняем тему только если нет сохраненной пользовательской темы
			const hasSavedTheme = localStorage.getItem('theme') !== null
			if (!hasSavedTheme && !isControlled) {
				const newChecked = e.matches
				setInternalChecked(newChecked)
				applyTheme(newChecked)
				onChange?.(newChecked)
			}
		}

		mediaQuery.addEventListener('change', handleSystemThemeChange)

		return () => {
			mediaQuery.removeEventListener('change', handleSystemThemeChange)
		}
	}, [isControlled, onChange])

	const handleToggle = () => {
		if (disabled) return

		const newChecked = !currentChecked

		if (!isControlled) {
			setInternalChecked(newChecked)
		}

		// Применяем тему
		applyTheme(newChecked)

		onChange?.(newChecked)
	}

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (disabled) return

		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault()
			handleToggle()
		}
	}

	const switchClasses = [
		styles.switch,
		styles[`switch--${size}`],
		styles[`switch--${color}`],
		currentChecked ? styles['switch--checked'] : '',
		disabled ? styles['switch--disabled'] : '',
		className,
	]
		.filter(Boolean)
		.join(' ')

	const switchElement = (
		<div
			className={switchClasses}
			onClick={handleToggle}
			onKeyDown={handleKeyDown}
			role='switch'
			aria-checked={currentChecked}
			aria-disabled={disabled}
			aria-label={label || (currentChecked ? 'Темная тема' : 'Светлая тема')}
			tabIndex={disabled ? -1 : 0}
		>
			<div className={styles.switch__track}>
				<div className={styles.switch__thumb} />
				{currentChecked ? (
					<svg
						className={styles.moon}
						width='20'
						height='20'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z'
							stroke='#000000'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				) : (
					<svg
						width='20'
						height='20'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={styles.sun}
					>
						<path
							d='M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z'
							stroke='#fff'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				)}
			</div>
		</div>
	)

	if (label) {
		return (
			<label
				className={clsx(
					styles['switch-wrapper'],
					styles[`switch-wrapper--${labelPosition}`]
				)}
			>
				{labelPosition === 'left' && (
					<span className={styles.switch__label}>{label}</span>
				)}
				{switchElement}
				{labelPosition === 'right' && (
					<span className={styles.switch__label}>{label}</span>
				)}
			</label>
		)
	}

	return switchElement
}

export default Switch
