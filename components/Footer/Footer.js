import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
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
                        At Origin Craft, we provide creative and professionally
                        made customized Leather & Paper- Boxes & Holders for any
                        product.
                    </li>
                </div>
                <div className={styles.col2}>
                    <h3>Links</h3>
                    <ul>
                        <Link href={"/"} passHref>
                            <li className={styles.li}>Home</li>
                        </Link>
                        <Link href={"/products"} passHref>
                            <li className={styles.li}>Products</li>
                        </Link>
                        <Link href={"/about"} passHref>
                            <li className={styles.li}>About</li>
                        </Link>
                        <Link href={"/contact"} passHref>
                            <li className={styles.li}>Contact Us</li>
                        </Link>
                        <div className={styles.icons}>
                            <a href="https://wa.me/+971506385117">
                                <FaWhatsapp />
                            </a>
                            <a href="https://instagram.com/origincraft_uae">
                                <FaInstagram />
                            </a>
                        </div>
                    </ul>
                </div>
                <div className={styles.col3}>
                    <h3>Reach Us</h3>
                    <li>
                        {" "}
                        Contact: <a href="tel:+9712260010">+971 22 600 10</a>, <br /> <a href="https://wa.me/+971506385117">+971506385117</a>
                    </li>
                    <li>
                        Email:{" "}
                        <a href="mailto:info@origincraft.ae">
                            info@origincraft.ae
                        </a>
                    </li>
                    <li>
                        Address : <br /> Origin craft hand crafted products and
                        work llc <br /> Shop number:sr-02 <br /> Aljawis Street{" "}
                        <br /> Near lamp roundabout about <br /> Qusaidat <br />{" "}
                        Ras al khaimah <br /> Po box : 6315
                    </li>
                </div>
            </div>
            <div className={styles.copyright}>
                Copyright © 2023 Origin Craft | Designed and Developed by{" "}
                <a target="_blank" rel="noreferrer" href="https://perple.in">
                    Perple
                </a>
            </div>
        </div>
    );
};

export default Footer;
