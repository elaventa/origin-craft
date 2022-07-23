import styles from "./Products.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";

const Products = ({products: prod, category, style}) => {
  console.log(prod)
  const [filteredProducts, setfilteredProducts] = useState([])

  useEffect(() => {
    if(category === "all"){
        setfilteredProducts(prod)
    } else {
      setfilteredProducts(prod.filter(p => category.includes(p.subCategory.value.current)))
    }
  }, [category])
  

  
  return (
    <div  className={styles.products}>
        {filteredProducts.map(product => (
            <ProductCard style={style} product={product} key={product.id} url={product.mainImage} title={product.name}/>
        ))}
    </div>
  )
}

export default Products