import styles from "./FilterContainer.module.scss"
import category from "../../data/categories"

const FilterContainer = () => {
  return (
    <div className={styles.filterContainer}>
    {category.map(categ => (
      <div key={categ.title} className={styles.box}>
          <h1 className={styles.title}>{categ.title}</h1>
           <div className={styles.sub}>
            
            {categ.list.map(sub => (
              <div key={sub} className={styles.subcategory}>
              <label htmlFor="topping">{sub}</label>
              <input
                  type="checkbox"
                  id={sub}
                  name={sub}
                  value={sub}
                /> 
            </div>
            ))}
            
           </div>
        </div>
      ))}
    </div>
  )
}

export default FilterContainer