import styles from './Navbar.module.scss'
import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import NavPopup from './NavPopup/NavPopup'



const Navbar = ({categories: category}) => {
  const [click, setclick] = useState(false)
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/" passHref>
          <div className={styles.logo}>
            <Image src={logo} alt="logo" />
          </div>
        </Link>
        <div className={styles.navitems}>
          {category.map((categ, i) => (
            <div key={i} className={styles.navitem}><Link href={`/products/${categ.categorySlug.current}`}>{categ.title}</Link></div>
          ))}
          {/* <div className={styles.navitem}><Link href="/products">Wallet</Link></div>
          <div className={styles.navitem}><Link href="/products">Gift Box</Link></div>
          <div className={styles.navitem}><Link href="/products">Chocolate & Sweets</Link></div>
          <div className={styles.navitem}><Link href="/products">Special Moments </Link></div>
          <div className={styles.navitem}><Link href="/products">Jewellary leather</Link></div>
          <div className={styles.navitem}><Link href="/products">Office stationary</Link></div>
          <div className={styles.navitem}><Link href="/products">Oud & Perfume </Link></div> */}
        </div>

        <div onClick={e => setclick(!click)} className={styles.toggle}>
          <span></span>
        </div>
        
      </nav>
      {click && <NavPopup setclick={setclick} click={click} />}
    </>
      
    )
}





export default Navbar
