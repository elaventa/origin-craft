import styles from "./FilterContainer.module.scss"
import category from "../../data/categories"
import { useState } from "react"

const FilterContainer = ({handleFilter, checked}) => {
  
  return (
    <div className={styles.filterContainer}>
    {category.map((categ, i) => (
      <div key={categ.title} className={styles.box}>
          <h1 className={styles.title}>{categ.title}</h1>
           <div className={styles.sub}>
            
            {categ.list.map((sub, j) => (
              <div key={sub.name} className={styles.subcategory}>
              <label htmlFor={sub.name}>{sub.value}</label>
              <input
                  type="checkbox"
                  id={sub.name}
                  name={sub.name}
                  value={sub.value}
                  checked={checked.includes(sub.name)}
                  onChange={e => handleFilter(e.target.id)}
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