import React from 'react'
import styles from '../styles/Header.module.css'
import Navbar from './Navbar'


export default function Header() {
  return (
    <header className={`${styles.header_layout} lg:w-1/5`}>
      <img className={styles.header_photo} src="images/photo.png" alt="photo" />
        <Navbar/>
    </header>
  )
}
