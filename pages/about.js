import React from "react";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import AboutUs from "../components/AboutUs/AboutUs";
import GetInTouch from "components/GetInTouch/GetInTouch";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";



import { groq } from "next-sanity";
import client from "@lib/sanity";

const query = groq`*[_type=="category"]{
  _id,
  categorySlug,
  list,
  title,
}`

const featuredProductsQuery = groq`
*[_type == "featured"][0]{
  fproducts[]->{
    mainImage
  }
}
`

export const getStaticProps = async() => {  
  const categories = await client.fetch(query)
  const fproducts = await client.fetch(featuredProductsQuery)
  return {
    props: {
      categories,
      fproducts
    },
    revalidate: 10
  }
}


const About = ({categories, fproducts}) => {
  return (
    <>
      <Navbar categories={categories} />
      <AboutUs />
      <FeaturedProducts products={fproducts} />
      <GetInTouch />
      <Footer />

    </>
  );
};

export default About;
