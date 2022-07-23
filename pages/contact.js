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

export const getStaticProps = async() => {  
  const categories = await client.fetch(query)
  return {
    props: {
      categories
    },
    revalidate: 10
  }
}




const Contact = ({categories}) => {
  const router = useRouter();
const [loading, setLoading] = useState(false);

useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);
  return (
    <>
      <Navbar categories={categories} />
      <Loading loading={loading} />
      <ReachOut />
      {/* <FeaturedProducts /> */}
      <GetInTouch />
      <Footer />

    </>
  );
};

export default Contact;
