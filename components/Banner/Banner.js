import React from 'react'
import styles from './Banner.module.scss'
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
        
        <Image src={banner1} alt="banner" />
        <div className={styles.custom}>
            <h1 className={styles.title}>Customized Leather Products</h1>
            <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus scelerisque felis integer at nibh aliquet condimentum.</p>
            <button className={styles.btn}>View all products</button>
        </div>
        <div className={`${styles.custom} ${styles.custom2}`}>
            <h1 className={styles.title}>What do we provide ?</h1>
            <p className={styles.content}> At Origin Craft, we provide creative and professionally made customized Leather & Paper- Boxes & Holders for any product.</p>
            <button className={styles.btn}>About Us</button>
        </div>
        <Image src={banner2} alt="banner" />

    </div>
  )
}

export default Banner