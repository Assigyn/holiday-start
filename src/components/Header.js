import styles from "./../assets/styles/components/header.module.css"

function Header() {
    return (
        <header className={styles.appHeader}>
            <div className={styles.appHeaderContainer}>
                <h1>Peace, nature,<br/>dream</h1>
                <h2>Find and book a great experience.</h2>
            </div>
        </header>
    )
}

export default Header;