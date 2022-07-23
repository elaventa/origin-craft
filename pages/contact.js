import Footer from "components/Footer/Footer";
import GetInTouch from "components/GetInTouch/GetInTouch";
import Navbar from "components/Navbar/Navbar";
import React from "react";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import ReachOut from "../components/ReachOut/ReachOut";


import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "../components/Loading/Loading";

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




const Contact = ({categories, fproducts}) => {
  return (
    <>
      <Navbar categories={categories} />
      <ReachOut />
      <FeaturedProducts products={fproducts} />
      <GetInTouch />
      <Footer />

    </>
  );
};

export default Contact;
