import Image from 'next/image'
import React from 'react'
import styles from "./ProductCard.module.scss"

const ProductCard = ({url, title}) => {
  return (
    <div className={styles.productContainer}>
        <Image className={styles.productImg} src={url} alt={title}/>
        <p className={styles.title}>{title}</p>
    </div>
  )
}

export default ProductCard