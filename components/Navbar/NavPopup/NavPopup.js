import Link from "next/link"
import styles from "./NavPopup.module.scss"
import instagram from "../../../assets/instagram.png"
import whatsapp from "../../../assets/whatsapp.png"
import Image from "next/image"

const NavPopup = ({setclick, click}) => {
  return (
    <div className={styles.navPopup}>
        <Link href={"/products"} passHref>
            <p onClick={e => setclick(!click)} className={styles.item}>PRODUCTS</p>
        </Link>
        <Link  href={"/about"} passHref>
            <p onClick={e => setclick(!click)} className={styles.item}>ABOUT</p>
        </Link>
        <Link  href={"/contact"} passHref>
            <p onClick={e => setclick(!click)} className={styles.item}>CONTACT US</p>
        </Link>
        <div className={styles.social}>
            <a  href="https://wa.me/+971506385117">
                <Image src={whatsapp} width={30} height={30} alt="whatsapp"/>
            </a>
            <a href="https://instagram.com/origincraft_uae">
                <Image src={instagram} width={30} height={30} alt="instagram"/>
            </a>
        </div>

        <div className={styles.contact}>
            <p className={styles.content}>Get in Touch</p>
            <p className={styles.content}>Contact: <a href="tel:+9172260010">+917 22 600 10</a>, <br /><a href="https://wa.me/+971506385117">+971506385117</a></p>
        </div>

    </div>
  )
}

export default NavPopup