import React from "react";
import styles from "./ReachOut.module.scss";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Map from "../Map/Map";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.reach}>Reach Out Us</p>
        <p className={styles.reach2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          ex!
        </p>
      </div>
      <div className={styles.contact}>
        <div className={styles.details}>
          <p>
            {" "}
            <span>Contact: </span> +971 557206035, +971 528779096
          </p>
          <p>
            {" "}
            <span>Email: </span> origincraft.rak@gmail.com
          </p>
          <p>
            {" "}
            <span>Adress: </span> P.O Box 6315 <br /> Al Qusaidat, Near Lamp
            Round About, Ras Al Khaimah,
            <br /> United Arab Emirates{" "}
          </p>
          <div>
            <FaWhatsapp />
            <FaInstagram />
          </div>
        </div>
        <div className={styles.map}>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
