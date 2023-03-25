import React from 'react'
import styles from './Banner.module.scss'
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
        
        <Image placeholder='blur' loading='lazy'  src={banner1} alt="banner" />
        <div className={styles.custom}>
            <h1 className={styles.title}>Customized Leather Products</h1>
                        <p className={styles.content}>At Origin Craft, we don&apos;t just create custom leather goods, we bring your dreams to life! From the initial design phase to the final product, we handle every step with precision and care, ensuring that you receive a one-of-a-kind piece that is as unique as you are. Our team of skilled artisans use only the finest materials to craft each and every item, resulting in a stunning masterpiece that will last a lifetime. So why settle for ordinary when you can have extraordinary? Let Origin Craft turn your vision into a reality that you can cherish forever!</p>
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
        <Image placeholder='blur' loading='lazy'  src={banner2} alt="banner" />

    </div>
  )
}

export default Banner