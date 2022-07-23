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
export default function Home({categories, fproducts}) {
  return (
    <div >
      <Navbar categories={categories} />
      <HomePage />
      <FeaturedProducts products={fproducts} />
      <Banner />
      <Review />
      <GetInTouch />
      <Footer />
    </div>
  )
}
