import React from 'react'
import styles from '../styles/Header.module.css'
import Navbar from './Navbar'


export default function Header() {
  return (
    <header className={`${styles.header_layout} xl:mt-32 bg-transparent` }>
      <img className={`${styles.header_photo}  shadow-2xl shadow-zinc-800/50`} src="images/photo-profil.png" alt="photo" />
        <Navbar/>
    </header>
  )
}
