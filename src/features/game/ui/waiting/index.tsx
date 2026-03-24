import styles from './waiting.module.scss'

export function Waiting({ text }: { text: string }) {
	return <section className={styles.section}>{text}</section>
}
