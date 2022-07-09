import styles from "./Products.module.scss";
import prod from "../../data/products"
import ProductCard from "../ProductCard/ProductCard";

const Products = ({category}) => {
  return (
    <div className={styles.products}>
        {prod.map(product => (
            <ProductCard key={product.id} url={product.url} title={product.name}/>
        ))}
    </div>
  )
}

export default Products