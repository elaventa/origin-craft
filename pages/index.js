import Footer from "components/Footer/Footer";
import GetInTouch from "components/GetInTouch/GetInTouch";
import Navbar from "components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import HomePage from "../components/Home/HomePage";
import Review from "../components/Review/Review";


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
export default function Home({categories}) {
  return (
    <div >
      <Navbar categories={categories} />
      <HomePage />
      {/* <FeaturedProducts /> */}
      <Banner />
      <Review />
      <GetInTouch />
      <Footer />
    </div>
  )
}
