import React from 'react'
import styles from './SearchInput.module.css'

export default function SearchInput() {
  return (
    <div className={styles.searchInputWrap}>
      <i className={`icon icon-search ${styles.icon}`} />
      <input
        type='text'
        name=''
        id=''
        className={styles.searchInput}
        placeholder='Search...'
      />
    </div>
  )
}
