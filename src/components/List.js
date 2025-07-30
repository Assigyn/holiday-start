import styles from "./../assets/styles/components/list.module.css"
import {useEffect, useState} from "react";
import Card from "./Card";

function List({buttons}) {
    const url = 'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json';
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch(url).then((response) => {
            if (200 === response.status) {
                return response.json();
            }

            setList([]);
        })
            .then((json) => {
                setList(json)
            })
            .catch(() => {
                setList([])
            })
    }, []);

    return (
        <div>
            <h3>Over 200 stays</h3>

            <div className={styles.appList}>
                {list.map((item) => {
                    return <Card key={item.id} data={item} />;
                })}
            </div>
        </div>
    )
}

export default List;