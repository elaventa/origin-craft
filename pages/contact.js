import Footer from "components/Footer/Footer";
import GetInTouch from "components/GetInTouch/GetInTouch";
import Navbar from "components/Navbar/Navbar";
import React from "react";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import ReachOut from "../components/ReachOut/ReachOut";



import { groq } from "next-sanity";
import client from "@lib/sanity";

const query = groq`*[_type=="category"]{
  _id,
  categorySlug,
  list,
  title,
}`

export const getStaticProps = async() => {  
  const categories = await client.fetch(query)
  return {
    props: {
      categories
    }
  }
}

const Contact = ({categories}) => {
  return (
    <>
      <Navbar categories={categories} />
      <ReachOut />
      {/* <FeaturedProducts /> */}
      <GetInTouch />
      <Footer />

    </>
  );
};

export default Contact;
