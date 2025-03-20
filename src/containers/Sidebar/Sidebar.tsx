'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import styles from './Sidebar.module.css'

import { useTheme } from '@/context/ThemeContext'

import { menuPrimary, menuSecondary } from '../../data/menu'

import SearchInput from '@/components/Inputs/SearchInput/SearchInput'
import ProfileMenu from '@/components/ProfileMenu/ProfileMenu'
import { Switch } from '@/components/ui/switch'

import Logo from '@images/logo.svg'

export default function Sidebar() {
  const { isDarkMode, toggleDarkMode } = useTheme()

  const [activeItem, setActiveItem] = useState<number | null>(0)

  const handleItemClick = (index: number) => {
    setActiveItem(index)
  }

  return (
    <div className={`${styles.sidebar} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles.sidebarLogo}>
        <figure className={styles.sidebarLogo}>
          <Image src={Logo} alt='Logo' fill />
        </figure>
      </div>
      <div className={styles.sidebarContent}>
        <div className={styles.sidebarMenu}>
          <div>
            <SearchInput />
            <ul className='mt-4'>
              {menuPrimary
                .sort((a, b) => a.order - b.order)
                .map((item: Menu, index) => (
                  <li
                    key={index}
                    className={`${styles.sidebarMenuItem} ${
                      activeItem === item.order ? styles.active : ''
                    }`}>
                    <a
                      href={item.link}
                      onClick={() => handleItemClick(item.order)}>
                      <i className={`icon ${item.icon} mr-1 text-lg`} />
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          <ul>
            {menuSecondary
              .sort((a, b) => a.order - b.order)
              .map((item: Menu, index) => (
                <li
                  key={index}
                  className={`${styles.sidebarMenuItem} ${
                    activeItem === item.order ? styles.active : ''
                  }`}>
                  <a
                    href={item.link}
                    onClick={() => handleItemClick(item.order)}>
                    <i className={`icon ${item.icon} mr-1 text-lg`} />
                    {item.label}
                  </a>
                </li>
              ))}
            <li className={styles.sidebarMenuItem}>
              <span className='flex items-center'>
                <i className='icon icon-moon mr-1 text-lg' />
                Dark Mode
              </span>
              <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.sidebarProfile}>
        <ProfileMenu />
      </div>
    </div>
  )
}
