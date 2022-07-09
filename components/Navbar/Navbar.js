import styles from './Navbar.module.scss'
import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import NavPopup from './NavPopup/NavPopup'

const Navbar = () => {
  const [click, setclick] = useState(false)
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" />
        </div>
        <div className={styles.navitems}>
          <div className={styles.navitem}><Link href="#">Wallet</Link></div>
          <div className={styles.navitem}><Link href="#">Gift Box</Link></div>
          <div className={styles.navitem}><Link href="#">Chocolate & Sweets</Link></div>
          <div className={styles.navitem}><Link href="#">Special Moments </Link></div>
          <div className={styles.navitem}><Link href="#">Jewellary leather</Link></div>
          <div className={styles.navitem}><Link href="#">Office stationary</Link></div>
          <div className={styles.navitem}><Link href="#">Oud & Perfume </Link></div>
        </div>

        <div onClick={e => setclick(!click)} className={styles.toggle}>
          <span></span>
        </div>
        
      </nav>
      {click && <NavPopup />}
    </>
      
    )
}

export default Navbar