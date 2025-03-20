import React from 'react'
import styles from '../CategoryCard/CategoryCard.module.css'

import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { useTheme } from '@/context/ThemeContext'

const chartData = [
  { month: 'January', desktop: 186 },
  { month: 'February', desktop: 305 },
  { month: 'March', desktop: 237 },
  { month: 'April', desktop: 73 },
  { month: 'May', desktop: 209 },
  { month: 'June', desktop: 214 },
  { month: 'July', desktop: 214 },
  { month: 'August', desktop: 214 },
  { month: 'September', desktop: 214 },
  { month: 'October', desktop: 214 },
  { month: 'November', desktop: 214 },
  { month: 'December', desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: 'Activities',
    color: '#1F7D53',
  },
} satisfies ChartConfig

export default function MonthCard() {
  const { isDarkMode } = useTheme()
  return (
    <div className={`${styles.cardCategory} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles.content}>
        <h2 className={styles.title}>Activity Trends Over Time</h2>
        <p className={styles.description}>
          Track activity trends over the year and identify seasonal patterns.
        </p>
      </div>
      <div className='w-full'>
        <ChartContainer config={chartConfig} className='max-h-[150px] w-full'>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={value => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey='desktop'
              type='natural'
              stroke='var(--color-desktop)'
              strokeWidth={2}
              dot={{
                fill: 'var(--color-desktop)',
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  )
}
