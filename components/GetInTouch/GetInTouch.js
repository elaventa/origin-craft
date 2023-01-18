import React from "react";
import styles from "./GetInTouch.module.scss";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const GetInTouch = () => {
    return (
        <div className={styles.Getintouch}>
            <p className={styles.title}>Get In Touch</p>
            <p className={styles.line2}>
                For customized product and services, you can reach out to us
            </p>
            <div>
                <p className={styles.contact}>
                    {" "}
                    <span>Contact:</span>{" "}
                    <a href="tel:+9172260010">+917 22 600 10</a>, <br /><a href="https://wa.me/+971506385117">+971506385117</a>
                </p>
                <p className={styles.email}>
                    <span>Email: </span>{" "}
                    <a href="mailto:info@origincraft.ae">info@origincraft.ae</a>
                </p>
            </div>
            <div>
                <a href="https://wa.me/+971506385117">
                    <FaWhatsapp />
                </a>
                <a href="https://instagram.com/origincraft_uae">
                    <FaInstagram />
                </a>
            </div>
        </div>
    );
};

export default GetInTouch;
