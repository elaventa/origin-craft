import React from "react";
import styles from "./FeaturedProducts.module.scss";

import { ProductsCarousel } from "../ProductsCarousel/ProductsCarousel";
import Link from "next/link";

const FeaturedProducts = ({products}) => {
    return (
        <>
            <div className={styles.featuredProducts}>
                <h1 className={styles.title}>
                    FEATURED PRODUCTS
                </h1>
                <Link href={"/products"} passHref>
                <button className={styles.btn}>
                    VIEW ALL
                </button>
                </Link>
            </div>
            <ProductsCarousel products={products} />
        </>
            
        
    );
};

export default FeaturedProducts;
