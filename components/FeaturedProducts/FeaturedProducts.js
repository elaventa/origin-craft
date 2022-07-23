import React from "react";
import styles from "./FeaturedProducts.module.scss";

import { ProductsCarousel } from "../ProductsCarousel/ProductsCarousel";

const FeaturedProducts = ({products}) => {
    return (
        <>
            <div className={styles.featuredProducts}>
                <h1 className={styles.title}>
                    FEATURED PRODUCTS
                </h1>
                <button className={styles.btn}>
                    VIEW ALL
                </button>
            </div>
            <ProductsCarousel products={products} />
        </>
            
        
    );
};

export default FeaturedProducts;
