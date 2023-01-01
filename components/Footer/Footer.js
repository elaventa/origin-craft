import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../assets/logo.png";
import Image from "next/image";
import {FaWhatsapp, FaInstagram} from 'react-icons/fa'
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.col1}>
          <li>
            <Image className={styles.logo} src={logo} alt="logo" />
          </li>
          <li>
            At Origin Craft, we provide creative and professionally made
            customized Leather & Paper- Boxes & Holders for any product.
          </li>
        </div>
        <div className={styles.col2}>
          <h3>Links</h3>
          <ul>
            <Link href={"/"} passHref><li className={styles.li}>Home</li></Link> 
            <Link href={"/products"} passHref><li className={styles.li}>Products</li></Link> 
            <Link href={"/about"} passHref><li className={styles.li}>About</li></Link> 
            <Link href={"/contact"} passHref><li className={styles.li}>Contact Us</li></Link> 
            <div className={styles.icons}>
              <FaWhatsapp />
              <FaInstagram />
            </div>
          </ul>
        </div>
        <div className={styles.col3}>
          <h3>Reach Us</h3>
          <li> Contact: +971 557206035, +971 528779096</li>
          <li>Email: origincraft.rak@gmail.com</li>
          <li>
            Address :PO Box 6315 Lorem ipsum dolor sit amet consectetur,
            adipisicing elit.
          </li>
        </div>

      
      </div>
      <div className={styles.copyright}>
          Copyright © 2023 Origin Craft |
          Designed and Developed by <a target="_blank" rel="noreferrer" href="https://perple.in">Perple</a>
        </div>
    </div>
  );
};

export default Footer;
