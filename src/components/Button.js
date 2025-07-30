import styles from "./../assets/styles/components/button.module.css"

function Button({button, setButtons}) {
    return (
        <button className={button.active ? `${styles.appBtn} ${styles.appBtnActive}` : styles.appBtn}>
            {button.text}
        </button>
    )
}

export default Button;