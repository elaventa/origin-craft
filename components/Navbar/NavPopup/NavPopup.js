import Link from "next/link"
import styles from "./NavPopup.module.scss"
import instagram from "../../../assets/instagram.png"
import whatsapp from "../../../assets/whatsapp.png"
import Image from "next/image"

const NavPopup = () => {
  return (
    <div className={styles.navPopup}>
        <Link href={"#"}>
            <p className={styles.item}>PRODUCTS</p>
        </Link>
        <Link href={"#"}>
            <p className={styles.item}>ABOUT</p>
        </Link>
        <Link href={"#"}>
            <p className={styles.item}>CONTACT US</p>
        </Link>

        <div className={styles.social}>
            <a href="https://instagram.com">
                <Image src={instagram} width={30} height={30} />
            </a>
            <a href="https://wa.me/+971557206035">
                <Image src={whatsapp} width={30} height={30} />
            </a>
        </div>

        <div className={styles.contact}>
            <p className={styles.content}>Get in Touch</p>
            <p className={styles.content}>Contact: +971 557206035, +971 528779096</p>
        </div>

    </div>
  )
}

export default NavPopup