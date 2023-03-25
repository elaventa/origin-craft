import styles from "../../styles/products.module.scss";
import { useEffect, useState } from "react";
import Products from "../../components/Products/Products";
import FilterContainer from "../../components/FilterContainer/FilterContainer";
import { useRouter } from "next/router";
import { groq } from "next-sanity";
import client, { urlFor } from "@lib/sanity";
import Navbar from "components/Navbar/Navbar";
import GetInTouch from "components/GetInTouch/GetInTouch";
import Footer from "components/Footer/Footer";
import { NextSeo } from "next-seo";

const query = groq`*[_type=="category"]{
  _id,
  categorySlug,
  title,
  list[]->{name, value}
}`;

const productQuery = groq`*[_type=="product"]{
  title,
  mainImage,
  subCategory->
}`;

export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type == "category" && defined(categorySlug.current)][].categorySlug.current`
    );

    return {
        paths: paths.map((category) => ({ params: { category } })),
        fallback: "blocking",
    };
}

export const getStaticProps = async () => {
    const categories = await client.fetch(query);
    const products = await client.fetch(productQuery);
    return {
        props: {
            categories,
            products,
        },
        revalidate: 10,
    };
};

const Category = ({ categories, products }) => {
    const router = useRouter();
    const { category: categoryId } = router.query;

    const [category, setcategory] = useState([]);
    const [click, setclick] = useState(false);

    useEffect(() => {
        const initialCategories = categories.filter(
            (c) => c.categorySlug.current === categoryId
        );
        if (initialCategories.length != 0) {
            let catList = initialCategories[0].list.map((cate) => {
                return cate.value.current;
            });
            setcategory(catList);
        }
    }, [categoryId]);

    const handleFilter = (newClicked) => {
        if (category.includes(newClicked)) {
            setcategory(category.filter((c) => c != newClicked));
        } else {
            setcategory([...category, newClicked]);
        }
    };

    return (
        <>
            <NextSeo
                title={`${categoryId.replaceAll("-", " ").toUpperCase()} | Origin craft UAE`}
                description={`${categoryId} ${category.join(", ").replaceAll("-", " ")} | Origin craft UAE`}
                openGraph={{
                    type: "website",
                    locale: "en_IE",
                    url: "https://origincraft.ae/products",
                    siteName: "OriginCraft",
                    images: [
                        {
                            url: urlFor(prod.filter(p => category.includes(p.subCategory.value.current))[0]?.mainImage)?.width(200)?.url() || "https://res.cloudinary.com/dpurlepvo/image/upload/v1679722897/bag_jedhvu.webp",
                        },
                    ],
                }}
            />
            <Navbar categories={categories} />
            <div className={styles.productContainer}>
                <div
                    onClick={(e) => {
                        setclick(!click);
                    }}
                    className={styles.filter}
                >
                    {click ? "Close" : "Filter"}
                </div>
                <div className={styles.filterContainer}>
                    {click && (
                        <FilterContainer
                            categories={categories}
                            handleFilter={handleFilter}
                            checked={category}
                        />
                    )}
                </div>
                <div className={styles.products}>
                    <Products products={products} category={category} />
                </div>
            </div>
            <GetInTouch />
            <Footer />
        </>
    );
};

export default Category;
