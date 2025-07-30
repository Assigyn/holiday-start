import styles from "./../../assets/styles/components/form.module.css"

function Checkbox({id, setSuperhost}) {
    const activateCheckbox = (checkbox) => {
        const checked = checkbox.checked;
        if (checked) {
            checkbox.parentElement.classList.add(styles.appSwitchChecked);
        } else {
            checkbox.parentElement.classList.remove(styles.appSwitchChecked);
        }

        return checked;
    }

    return (
        <div className={styles.appSwitchContainer}>
            <label className={styles.appSwitch}>
                <input id={id} type="checkbox" onClick={(e) => {setSuperhost(activateCheckbox(e.target))}}/>
                <span className={styles.appSwitchSlider}></span>
            </label>

            <span>Superhost</span>
        </div>
    )
}

export default Checkbox;