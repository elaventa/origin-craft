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

export const getStaticProps = async() => {  
  const categories = await client.fetch(query)
  return {
    props: {
      categories
    }
  }
}


const About = ({categories}) => {
  return (
    <>
      <Navbar categories={categories} />
      <AboutUs />
      {/* <FeaturedProducts /> */}
      <GetInTouch />
      <Footer />

    </>
  );
};

export default About;
