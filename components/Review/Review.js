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
      Our clients praise us for our great results, personable service, expert knowledge and on-time delivery. Here are what just a few of them had to say.
      </p>

      <div className={styles.reviews}>
        

        <div className={styles.review}>
            <div className={styles.stars}>
               <Stars />
            </div>
            <p className={styles.content}>
              “Best work always... appreciated.”
            </p>
        </div>

        <div className={styles.review}>
            <div className={styles.stars}>
              <Stars />
            </div>
            <p className={styles.content}>
              “Great company and very good service”
            </p>
        </div>

        <div className={styles.review}>
            <div className={styles.stars}>
            <Stars />
            </div>
            <p className={styles.content}>
              “Very Good and Fast Service”
            </p>
        </div>

        <div className={styles.review}>
            <div className={styles.stars}>
            <Stars />
            </div>
            <p className={styles.content}>
              “Excellent Gift boxes especially leather box”
            </p>
        </div>
      </div>
    </div>
  )
} 

export default Review