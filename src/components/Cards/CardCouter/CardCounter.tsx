import React from 'react'
import styles from './CardCounter.module.css'
import { useTheme } from '@/context/ThemeContext'

export default function CardCounter({
  icon,
  title,
  count,
}: {
  icon?: string
  title: string
  count: number
}) {
  const { isDarkMode } = useTheme()
  return (
    <div className={`${styles.cardCounter} ${isDarkMode ? styles.dark : ''}`}>
      <i className={`icon ${icon} ${styles.icon}`} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.counter}>{count}</span>
      </div>
      <span className={styles.updateTag}>+5 from yesterday</span>
    </div>
  )
}
