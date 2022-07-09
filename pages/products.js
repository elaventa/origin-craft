import styles from "../styles/products.module.scss"
import { useState } from "react";
import Filter from "../components/Filter/Filter";
import Products from "../components/Products/Products";
import FilterContainer from "../components/FilterContainer/FilterContainer";

const ProductsPage = () => {
  const [category, setcategory] = useState("all")
  const [click, setclick] = useState(false)
  return (
    <div className={styles.productContainer}>
      <div onClick={e => setclick(!click)} className={styles.filter}>
        {click ? "Close" : "Filter"}
      </div>
      <div className={styles.filterContainer}>
        {click && <FilterContainer />}
      </div>
      <Products category={category} />
    </div>
  )
}

export default ProductsPage