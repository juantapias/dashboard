import React from 'react'
import Image from 'next/image'

import styles from './UserCard.module.css'
import { useTheme } from '@/context/ThemeContext'

export default function UserCard() {
  const { isDarkMode } = useTheme()
  return (
    <div className={`${styles.card} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles.userCard}>
        <h2 className={styles.userCardTitle}>12k</h2>
        <p className={styles.userCardDescription}>Happy users</p>
        <div className={styles.userCardAvatars}>
          <figure className={styles.userCardAvatar}>
            <Image
              src={'https://avatar.iran.liara.run/public'}
              alt='profile'
              fill
            />
          </figure>
          <figure className={styles.userCardAvatar}>
            <Image
              src={'https://avatar.iran.liara.run/public'}
              alt='profile'
              fill
            />
          </figure>
          <figure className={styles.userCardAvatar}>
            <Image
              src={'https://avatar.iran.liara.run/public'}
              alt='profile'
              fill
            />
          </figure>
        </div>
      </div>
    </div>
  )
}
