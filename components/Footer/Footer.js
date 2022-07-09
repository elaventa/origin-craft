import React from 'react'
import styles from './Footer.module.scss'
import logo from "../../assets/logo.png"
import Image from 'next/image'



const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.col1}>
        <li>
        <Image className={styles.logo} src={logo} alt="logo"/>

        </li>
        <li>
          At Origin Craft, we provide creative and professionally made customized Leather & Paper- Boxes & Holders for any product.
        </li>
      </div>
      <div className={styles.col2}>
        <li>
          Home
        </li>
        <li>
          Products
        </li>
        <li>
          About
        </li>
        <li>
          Contact Us
        </li>
      </div>
      <div className={styles.col3}>
        <li>        Contact: +971 557206035, +971 528779096
</li>
<li>
  Email: origincraft.rak@gmail.com
</li>
<li>
  Address :PO Box 6315
  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
</li>
      </div>
    </div>
  )
}

export default Footer