import styles from "./../assets/styles/components/button.module.css"

function Button({button, buttons, setButtons}) {
    const changeButtonStates = (button) => {
        return buttons.map((buttonData => {
            buttonData.active = buttonData.id === button.id;
            return buttonData;
        }));
    }

    return (
        <button className={button.active ? `${styles.appBtn} ${styles.appBtnActive}` : styles.appBtn} onClick={(e) => {
            e.preventDefault();
            setButtons(changeButtonStates(button))
        }}>
            {button.text}
        </button>
    )
}

export default Button;