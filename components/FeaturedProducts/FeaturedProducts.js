import React from "react";
import styles from "./FeaturedProducts.module.scss";

import { ProductsCarousel } from "../ProductsCarousel/ProductsCarousel";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};
const FeaturedProducts = () => {
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
            <ProductsCarousel />
        </>
            
        
    );
};

export default FeaturedProducts;
