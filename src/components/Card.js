import styles from "./../assets/styles/components/card.module.css"

function Card({data}) {
    console.log(data);

    return (
        <div className={styles.appCard}>
            {data.superhost ? <span className={styles.cardSuperHost}>Superhost</span> : null}
            <img src={data.image} alt={data.title}/>
            <div className={styles.cardContent}>
                <div className={styles.cardBody}>
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                    <ul>
                        <li>{data.capacity.bedroom} bedrooms</li>
                        <li>{data.capacity.people} guests</li>
                    </ul>
                </div>
                <div className={styles.cardFooter}>
                    <span>{data.price}</span>
                    <span>{data.rating}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;