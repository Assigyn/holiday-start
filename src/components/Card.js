import styles from "./../assets/styles/components/card.module.css"
import star from "./../assets/img/Starfill.svg"
import home from "./../assets/img/Home_duotone.svg"
import user from "./../assets/img/User_alt_duotone.svg"

function Card({data}) {
    return (
        <div className={styles.appCard}>
            {data.superhost ?
                <span className={styles.cardSuperHost}>Superhost <img src={star} alt="star"/></span> : null}
            <img src={data.image} alt={data.title}/>
            <div className={styles.cardContent}>
                <div className={styles.cardBody}>
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                    <div className={styles.cardCapacity}>
                        <div className={styles.item}>
                            <img src={home} alt="home_icon" width="25px" height="25px"/>
                            {data.capacity.bedroom} bedrooms
                        </div>
                        <div className={styles.item}>
                            <img src={user} alt="user_icon" width="25px" height="25px"/>
                            {data.capacity.people} guests
                        </div>
                    </div>
                </div>
                <div className={styles.cardFooter}>
                    <div className={styles.cardPrice}>
                        <span>${data.price}</span>/night
                    </div>
                    <div className={styles.cardRating}>
                        <img src={star} alt="star" width="30px" height="30px"/>
                        <span> {data.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;