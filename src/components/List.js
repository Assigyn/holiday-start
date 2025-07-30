import styles from "./../assets/styles/components/list.module.css"
import {useEffect, useState} from "react";
import Card from "./Card";

function List({buttons, filter, superHost}) {
    const url = 'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json';
    const [list, setList] = useState([]);
    const [listFiltered, setListFiltered] = useState(list);

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

    useEffect(() => {
        let activeFilter = buttons.filter((b) => {return b.active})[0];
        let newList = list;

        if ('All stays' !== activeFilter.text) {
            newList = newList.filter((i) => {return i.location === activeFilter.text});
        }

        if (null !== filter) {
            newList = newList.filter((i) => {return parseInt(i.capacity.bedroom) === parseInt(filter)});
        }

        if (superHost) {
            newList = newList.filter((i) => {  return i.superhost});
        }

        setListFiltered(newList)
    }, [list, buttons, filter, superHost])

    return (
        <div>
            <h3>Over 200 stays</h3>

            <div className={styles.appList}>
                {listFiltered.map((item) => {
                    return <Card key={item.id} data={item} />;
                })}
            </div>
        </div>
    )
}

export default List;