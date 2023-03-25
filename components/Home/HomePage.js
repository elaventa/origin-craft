import styles from "./HomePage.module.scss"
import Image from 'next/image'
import React from 'react'
import background from "../../assets/background.png"
import Link from "next/link"

const HomePage = () => {
  return (
    <div className={styles.homepage}>
        <Image placeholder='blur' loading='lazy' className={styles.background} src={background} alt="background"/>
        <div className={styles.content}>
          <h1 className={styles.featureTitle}>Completely customized Leather, Velvet & Paper Products</h1>
          <Link href="/products" passHref>
            <button className={styles.btn}>Shop Now</button>
          </Link>
        </div>
    </div>
  )
}

export default HomePage
