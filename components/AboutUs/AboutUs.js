import Image from "next/image";
import React from "react";
import styles from "./AboutUs.module.scss";
import im from '../../assets/about.webp'

const AboutUs = () => {
  return (
    <div className={styles.aboutus}>
      <div>
        <p className={styles.about}>ABOUT US</p>

        <p className={styles.descr}>
          Beautiful & Creative Box is an exceptional way to boost your product
          packaging to a whole new level. Leather is a material that is commonly
          associated with luxury, which helps you create the perceived quality
          you desire. With Origin Craft, we can provide you professionally made
          leather & Paper Boxes for any product.
        </p>
      </div>
      <div className={styles.blank}>
      </div>
    </div>
  );
};

export default AboutUs;
