import styles from "../../styles/products.module.scss"
import { useEffect, useState } from "react";
import Products from "../../components/Products/Products";
import FilterContainer from "../../components/FilterContainer/FilterContainer";
import { useRouter } from 'next/router'
import categories from "../../data/categories";

const Category = () => {
  const router = useRouter()
  const { category: categoryId } = router.query

  const [category, setcategory] = useState([])
  const [click, setclick] = useState(false)


  useEffect(() => {
        const initialCategories = categories.filter(c =>  c.categorySlug === categoryId)
        console.log(initialCategories)
        if(initialCategories.length != 0){
            let catList = initialCategories[0].list.map(cate => {
                return cate.name
            })
            setcategory(catList)

        }
  }, [categoryId])
  

  const handleFilter = (newClicked) => {
    
    if(category.includes(newClicked)){
      setcategory(category.filter(c => c!=newClicked))
    } else {
      setcategory([...category, newClicked])
    }
    
  }

  return (
    <div className={styles.productContainer}>
      <div onClick={e => {setclick(!click);console.log(category)}} className={styles.filter}>
        {click ? "Close" : "Filter"}
      </div>
      <div className={styles.filterContainer}>
        {click && <FilterContainer handleFilter={handleFilter} checked={category} />}
      </div>
      <div className={styles.products}>
        <Products category={category} />
      </div>
    </div>
  )
}

export default Category