import styles from "./Products.module.scss";
import prod from "../../data/products"
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";

const Products = ({category}) => {
  const [filteredProducts, setfilteredProducts] = useState([])

  useEffect(() => {
    if(category === "all"){
        setfilteredProducts(prod)
    } else {
      setfilteredProducts(prod.filter(p => category.includes(p.category)))
    }
  }, [category])
  
  
  return (
    <div className={styles.products}>
        {filteredProducts.map(product => (
            <ProductCard key={product.id} url={product.url} title={product.name}/>
        ))}
    </div>
  )
}

export default Products