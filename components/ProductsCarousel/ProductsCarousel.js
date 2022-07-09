import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import p1 from "../../assets/flowerGiftBox.png";
import p2 from "../../assets/choclate.png";
import p3 from "../../assets/jewel.png";
import p4 from "../../assets/weddingSplGB.png";

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
        breakpoint: { max: 1024, min: 800 },
        items: 2.2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 800, min: 0 },
        items: 1.6,
        slidesToSlide: 1, // optional, default to 1.
    },
};
export const ProductsCarousel = () => {
    return (
        <Carousel
            showDots={false}
            responsive={responsive}
            keyBoardControl={true}
            autoPlay={false}
            containerClass={styles.carouselContainer}
        >
            <ProductCard url={p1} title="Flower Gift Box" />
            <ProductCard url={p2} title="Flower Gift Box 1" />
            <ProductCard url={p3} title="Flower Gift Box 2" />
            <ProductCard url={p4} title="Flower Gift Box 3" />
            <ProductCard url={p2} title="Flower Gift Box 4" />
            <ProductCard url={p4} title="Flower Gift Box 4" />
            <ProductCard url={p1} title="Flower Gift Box" />
            <ProductCard url={p2} title="Flower Gift Box 1" />
            <ProductCard url={p3} title="Flower Gift Box 2" />
            <ProductCard url={p4} title="Flower Gift Box 3" />
            <ProductCard url={p2} title="Flower Gift Box 4" />
            <ProductCard url={p4} title="Flower Gift Box 4" />
        </Carousel>
    );
};
