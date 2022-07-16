import React from 'react'
import styles from './GetInTouch.module.scss'
import {FaWhatsapp, FaInstagram} from 'react-icons/fa'


const GetInTouch = () => {

    return(
<div className={styles.Getintouch}>
        <p className={styles.title}>Get In Touch</p>
        <p className={styles.line2}>For customized product and services, you can reach out to us</p>
        <div>
        <p className={styles.contact}> <span>
        Contact:</span> +91 557206035, <br/> +971 528779096</p>
        <p className={styles.email}><span>Email: </span>origincraft.rak@gmail.com</p>
        </div>
        <div>
        <FaWhatsapp />
          <FaInstagram />
        </div>
</div>

    );
};

export default GetInTouch;