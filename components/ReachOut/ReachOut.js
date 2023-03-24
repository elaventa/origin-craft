import React from "react";
import styles from "./ReachOut.module.scss";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Map from "../Map/Map";

const ReachOut = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <p className={styles.reach}>Reach Out Us</p>
                <p className={styles.reach2}>
                    Reach out to us for any questions or assistance with our
                    products and services. Our dedicated team is available to
                    help you with any inquiries you may have.
                </p>
            </div>
            <div className={styles.contact}>
                <div className={styles.details}>
                    <p>
                        {" "}
                        <span>Contact: </span>{" "}
                        <a href="tel:+97172260010">+971 7 22 600 10</a>, <br />  <a href="https://wa.me/+971506385117">+971506385117</a>
                    </p>
                    <p>
                        {" "}
                        <span>Email: </span>{" "}
                        <a href="mailto:info@origincraft.ae">
                            info@origincraft.ae
                        </a>
                    </p>
                    <p>
                        {" "}
                        <span>Adress: </span> <br /> Origin craft hand crafted
                        products and work llc <br /> Shop number:sr-02 <br />{" "}
                        Aljawis Street <br /> Near lamp roundabout about <br />{" "}
                        Qusaidat <br /> Ras al khaimah <br /> Po box : 6315
                    </p>
                    <div>
                        <a href="https://wa.me/+971506385117">
                            <FaWhatsapp />
                        </a>
                        <a href="https://instagram.com/origincraft_uae">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                <div className={styles.map}>
                    <Map />
                </div>
            </div>
        </div>
    );
};

export default ReachOut;
