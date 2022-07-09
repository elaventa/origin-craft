import styles from "./Filter.module.scss"

const Filter = ({content}) => {
  return (
    <div className={styles.filter}>
        {content}
    </div>
  )
}

export default Filter