import { useState } from 'react';
import styles from '../../styles/Canvas.module.css'
import {People, Pets, Home, WbSunny, EmojiEvents, BeachAccess, SportsSoccer, MoreHoriz} from '@material-ui/icons/';


export default function Categories() {
    const [expand, setExpand] = useState(true)

    const categories = [
        {
            name: "People",
            icon: (<People/>)
        },
        {
            name: "Animals",
            icon: (<Pets/>)
        },
        {
            name: "Indoors",
            icon: (<Home/>)
        },
        {
            name: "Outdoors",
            icon: (<WbSunny/>)
        },
        {
            name: "Events",
            icon: (<EmojiEvents/>)
        },
        {
            name: "Holidays",
            icon: (<BeachAccess/>)
        },
        {
            name: "Sports",
            icon: (<SportsSoccer/>)
        }
    ]

    const shortCategories = categories.slice(0, 4)
    
    const expandCat = () => {
        console.log(expand)
        setExpand(!expand)
    }

    return (
        <div className={styles.categories}>
            {shortCategories.map(cat => {
                return (
                    <div key={cat.name} className={styles.singleCat}>
                        {cat.icon}
                        <h3>{cat.name}</h3>
                    </div>
                )
            })}
            {expand
            ?
            <div onClick={expandCat} className={styles.singleCat}>
                <MoreHoriz/>
                <h3>More</h3>
            </div>
            :
            categories.slice(5).map(cat => {
                return (
                    <div key={cat.name} className={styles.singleCat}>
                        {cat.icon}
                        <h3>{cat.name}</h3>
                    </div>
                )
            })} 
        </div>
    )
}