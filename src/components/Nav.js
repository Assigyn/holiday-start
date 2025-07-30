import styles from "./../assets/styles/components/nav.module.css"
import Button from "./Button";
import Select from "./form/Select";

function Nav({buttons, setButtons, setFilter}) {
    const options = [
        {value: 1, text: '1 bedroom'},
        {value: 2, text: '2 bedrooms'},
    ];

    return (
        <nav className={styles.appNav}>
            <ul>
                {buttons.map((button) => {
                    return <li key={button.id}><Button key={button.id} buttons={buttons} button={button} setButtons={setButtons}/></li>
                })}
            </ul>

            <Select id="property-select" placeholder="Property Type" options={options} setFilter={setFilter} />
        </nav>
    )
}

export default Nav;