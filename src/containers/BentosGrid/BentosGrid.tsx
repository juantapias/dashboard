'use client'

import React from 'react'

import CardCounter from '@/components/Cards/CardCouter/CardCounter'
import CalendarCard from '@/components/Cards/CalendarCard/CalendarCard'
import CategoryCard from '@/components/Cards/CategoryCard/CategoryCard'
import UserCard from '@/components/Cards/UserCard/UserCard'
import MonthCard from '@/components/Cards/MonthCard/MonthCard'

import { useTheme } from '@/context/ThemeContext'

const styles = {
  background: 'var(--black)',
}

export default function BentosGrid() {
  const { isDarkMode } = useTheme()
  return (
    <div style={isDarkMode ? styles : {}} className='px-8 py-4 w-full'>
      <div className='grid grid-rows-1 gap-4'>
        <div className='grid grid-cols-3 gap-4'>
          <CardCounter icon='icon-activity' title='Activities' count={255} />
          <CardCounter icon='icon-hotel' title='Hotels' count={22} />
          <CardCounter icon='icon-restaurant' title='Restaurants' count={18} />
        </div>

        <div className='grid grid-cols-4 gap-4'>
          <CalendarCard />
          <div className='col-span-2'>
            <CategoryCard />
          </div>
          <UserCard />
        </div>

        <div className='grid grid-cols-1 gap-4'>
          <MonthCard />
        </div>
      </div>
    </div>
  )
}
