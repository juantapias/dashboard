import React from 'react'
import Image from 'next/image'
import styles from './ProfileMenu.module.css'

import { useTheme } from '@/context/ThemeContext'

export default function ProfileMenu() {
  const { isDarkMode } = useTheme()
  return (
    <div className={`${styles.profileMenu} ${isDarkMode ? styles.dark : ''}`}>
      <figure className={styles.profileAvatar}>
        <Image src={'https://picsum.photos/200'} alt='profile' fill />
      </figure>
      <div className={styles.profileData}>
        <span className={styles.profileName}>Adeline Ortega</span>
        <span className={styles.profileEmail}>ri@zo.mn</span>
      </div>
    </div>
  )
}
