import React from 'react'
import styles from './Banner.module.scss'
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
        
        <Image src={banner1} alt="banner" />
        <div className={styles.custom}>
            <h1 className={styles.title}>Customized Leather Products</h1>
            <p className={styles.content}>We pride ourselves as a custom leather goods manufacturer at every step from design to production under one company. True Trident Leather is a custom leather manufacturer or in other words, a custom leather maker that can turn your ideas into reality using high-quality leather materials.</p>
            <Link href={"/products"} passHref>
              <button className={styles.btn}>View all products</button>
            </Link>
        </div>
        <div className={`${styles.custom} ${styles.custom2}`}>
            <h1 className={styles.title}>What do we provide ?</h1>
            <p className={styles.content}> At Origin Craft, we provide creative and professionally made customized Leather & Paper- Boxes & Holders for any product.</p>
            <Link href={"/about"} passHref>
              <button className={styles.btn}>About Us</button>
            </Link>
        </div>
        <Image src={banner2} alt="banner" />

    </div>
  )
}

export default Banner