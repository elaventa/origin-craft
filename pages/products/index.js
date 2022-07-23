import styles from "../../styles/products.module.scss"
import { useState } from "react";
import FilterContainer from "../../components/FilterContainer/FilterContainer";
import Products from "../../components/Products/Products";
import Navbar from "components/Navbar/Navbar";
import { groq } from "next-sanity";
import client from "@lib/sanity";

const query = groq`*[_type=="category"]{
  _id,
  categorySlug,
  title,
  list[]->{name, value}
}`

const productQuery = groq`*[_type=="product"]{
  title,
  mainImage,
  subCategory->
}`


export const getStaticProps = async() => {  
  const categories = await client.fetch(query)
  const products = await client.fetch(productQuery)
  return {
    props: {
      categories,
      products,
    }
  }
}


const ProductsPage = ({categories, products}) => {
  const [category, setcategory] = useState([])
  const [click, setclick] = useState(false)

  const handleFilter = (newClicked) => {
    console.log(category)
    console.log(newClicked)
    if(category.includes(newClicked)){
      setcategory(category.filter(c => c!=newClicked))
      console.log(category)
    } else {
      setcategory([...category, newClicked])
      console.log(category)
    }
    
  }


  return (
    <>
    <Navbar categories={categories} />
    <div className={styles.productContainer}>
      <div onClick={e => setclick(!click)} className={styles.filter}>
        {click ? "Close" : "Filter"}
      </div>
      <div className={styles.filterContainer}>
        {click && <FilterContainer categories={categories} handleFilter={handleFilter} checked={category} />}
      </div>
      <div className={styles.products}>
        <Products products={products} category={category.length === 0 ? "all" : category} />
      </div>
    </div>
    </>
  )
}

export default ProductsPage