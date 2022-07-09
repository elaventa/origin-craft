import React from 'react'
import styles from "./Review.module.scss"
import stars from "../../assets/star.png"
import Image from 'next/image'
import Stars from './Stars'
const Review = () => {
  return (
    <div className={styles.reviewContainer}>
      <h1 className={styles.title}>
        Our Review Says
      </h1>
      <p className={styles.content}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet sit et quam ut est enim leo tempor aliquet.
      </p>

      <div className={styles.reviews}>
        <div className={styles.review}>
            <div className={styles.stars}>
              <Stars />
            </div>
            <p className={styles.content}>
              “Good and best choice for customised boxes gift boxes bags especially in leather and printing.”
            </p>
        </div>

        <div className={styles.review}>
            <div className={styles.stars}>
               <Stars />
            </div>
            <p className={styles.content}>
              “Good and best choice for customised boxes gift boxes bags especially in leather and printing.”
            </p>
        </div>

        <div className={styles.review}>
            <div className={styles.stars}>
            <Stars />
            </div>
            <p className={styles.content}>
              “Good and best choice for customised boxes gift boxes bags especially in leather and printing.”
            </p>
        </div>
      </div>
    </div>
  )
} 

export default Review