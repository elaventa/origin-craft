import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductsCarousel.module.scss";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1280 },
        items: 4.5,
        slidesToSlide: 3, // optional, default to 1.
    },
    desktop2: {
        breakpoint: { max: 1280, min: 1024 },
        items: 3,
        slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 600 },
        items: 3,
        slidesToSlide: 2, // optional, default to 1.
    },
    tablet2: {
        breakpoint: { max: 600, min: 400 },
        items: 2.6,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 400, min: 0 },
        items: 1.6,
        slidesToSlide: 1, // optional, default to 1.
    },
};
export const ProductsCarousel = ({products}) => {
    return (
        <Carousel
            showDots={false}
            responsive={responsive}
            keyBoardControl={true}
            autoPlay={false}
            containerClass={styles.carouselContainer}
        >
            {products.fproducts.map((product, i) => <ProductCard key={i} product={product} />)}
        </Carousel>
    );
};
