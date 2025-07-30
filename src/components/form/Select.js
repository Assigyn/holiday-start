import styles from "./../../assets/styles/components/form.module.css"

function Select({id, placeholder, options, setFilter}) {
    return(
        <select id={id} className={styles.appSelect} onChange={(e) => {
            e.preventDefault();
            setFilter(e.target.value !== "0" ? e.target.value : null)
        }}>
            <option value="0">{placeholder}</option>
            {options.map((option, key) => {
                return <option key={key} value={option.value}>{option.text}</option>
            })}
        </select>
    )
}

export default Select;