'use client'

import React, { useState } from 'react'
import styles from '../Cards.module.css'

import { Calendar } from '@/components/ui/calendar'
import { useTheme } from '@/context/ThemeContext'

export default function CalendarCard() {
  const { isDarkMode } = useTheme()

  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <div className={`${styles.card} ${isDarkMode ? styles.dark : ''}`}>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-md'
      />
    </div>
  )
}
