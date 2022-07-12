import styles from "../../styles/products.module.scss"
import { useState } from "react";
import FilterContainer from "../../components/FilterContainer/FilterContainer";
import Products from "../../components/Products/Products";


const ProductsPage = () => {
  const [category, setcategory] = useState([])
  const [click, setclick] = useState(false)

  const handleFilter = (newClicked) => {
    if(category.includes(newClicked)){
      setcategory(category.filter(c => c!=newClicked))
    } else {
      setcategory([...category, newClicked])
    }
    
  }


  return (
    <div className={styles.productContainer}>
      <div onClick={e => setclick(!click)} className={styles.filter}>
        {click ? "Close" : "Filter"}
      </div>
      <div className={styles.filterContainer}>
        {click && <FilterContainer handleFilter={handleFilter} checked={category} />}
      </div>
      <div className={styles.products}>
        <Products category={category.length === 0 ? "all" : category} />
      </div>
    </div>
  )
}

export default ProductsPage