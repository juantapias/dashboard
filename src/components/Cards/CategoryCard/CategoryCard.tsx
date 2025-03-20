import React from 'react'
import styles from './CategoryCard.module.css'

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { useTheme } from '@/context/ThemeContext'

const chartData = [
  { month: 'Run', category: 186 },
  { month: 'Nature', category: 305 },
  { month: 'Pets', category: 237 },
  { month: 'Concert', category: 73 },
  { month: 'Sport', category: 209 },
  { month: 'Game', category: 214 },
  { month: 'Travel', category: 214 },
]

const chartConfig = {
  category: {
    label: 'Category',
    color: '#1F7D53',
  },
} satisfies ChartConfig

export default function CategoryCard() {
  const { isDarkMode } = useTheme()
  return (
    <div className={`${styles.cardCategory} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles.content}>
        <h2 className={styles.title}>Activity Distribution</h2>
        <p className={styles.description}>
          See how activities are distributed across categories and spot key
          trends.
        </p>
      </div>
      <div className='w-full'>
        <ChartContainer config={chartConfig} className='mx-auto  max-h-[250px]'>
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarGrid radialLines={false} polarRadius={[90]} strokeWidth={1} />
            <PolarAngleAxis dataKey='month' />
            <Radar
              dataKey='category'
              fill='var(--color-category)'
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </div>
    </div>
  )
}
