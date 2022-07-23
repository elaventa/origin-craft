import styles from "./FilterContainer.module.scss"

const FilterContainer = ({handleFilter, checked, categories: category}) => {
  
  return (
    <div className={styles.filterContainer}>
    {category.map((categ, i) => (
      <div key={categ.title} className={styles.box}>
          <h1 className={styles.title}>{categ.title}</h1>
           <div className={styles.sub}>
            
            {categ.list.map((sub, j) => (
              <div key={sub.value.current} className={styles.subcategory}>
              <label htmlFor={sub.value.current}>{sub.name}</label>
              <input
                  type="checkbox"
                  id={sub.value.current}
                  name={sub.name}
                  value={sub.value.current}
                  checked={checked.includes(sub.value.current)}
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