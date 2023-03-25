import Image from "next/image";
import React from "react";
import styles from "./ProductCard.module.scss";
import { urlFor } from "@lib/sanity";

const ProductCard = ({ mainImage, title, style, product }) => {
    return (
        <div style={style} className={styles.productContainer}>
            <Image
                loading="lazy"
                className={styles.productImg}
                src={urlFor(product.mainImage).width(200).url()}
                alt={title}
                width="200px"
                height={200}
            />
            {/* <p className={styles.title}>{title}</p> */}
        </div>
    );
};

export default ProductCard;
