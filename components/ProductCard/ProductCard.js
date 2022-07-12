import Image from 'next/image'
import React from 'react'
import styles from "./ProductCard.module.scss"

const ProductCard = ({url, title, style}) => {
  return (
    <div style={style} className={styles.productContainer}>
        <Image className={styles.productImg} src={url} alt={title} width="200px" height={200}/>
        <p className={styles.title}>{title}</p>
    </div>
  )
}

export default ProductCard