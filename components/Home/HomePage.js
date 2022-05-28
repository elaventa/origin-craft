import styles from "./HomePage.module.scss"
import Image from 'next/image'
import React from 'react'
import background from "../../assets/background.png"

const HomePage = () => {
  return (
    <div className={styles.homepage}>
        <Image className={styles.background} src={background} alt="background"/>
        <div className={styles.content}>
          <h1 className={styles.featureTitle}>Completely customized leather and box products</h1>
          <button className={styles.btn}>Shop Now</button>
        </div>
    </div>
  )
}

export default HomePage