import styles from "./../assets/styles/components/nav.module.css"
import Button from "./Button";

function Nav({buttons, setButtons}) {
    return (
        <nav className={styles.appNav}>
            <ul>
                {buttons.map((button) => {
                    return <li key={button.id}><Button key={button.id} button={button} setButtons={setButtons}/></li>
                })}
            </ul>
        </nav>
    )
}

export default Nav;