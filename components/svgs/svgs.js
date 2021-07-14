// import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import styles from '../../styles/Canvas.module.css'
import Svg1 from '../../images/svg1.svg'
import Svg2 from '../../images/svg2.svg'
import Svg3 from '../../images/svg3.svg'

export default function Svgs(props) {

    const startDragging = (ev) => {
        let dragData = ev.target.src.replace("http://localhost:3000", "");
        props.setBeginDraggingSvg(dragData)
    }

    return (
        <div className={styles.svgList}>
            {"outdoors".includes(props.category) || !props.category
            ?
            <div className={styles.svg}>
            <Image 
                onDragStart={startDragging}
                draggable
                src={Svg1} 
                alt="svg1"
            />
            </div>
            :
            null
            }
            {"people".includes(props.category) || !props.category
            ?
            <div className={styles.svg}>
            <Image 
                onDragStart={startDragging}
                draggable
                src={Svg2} 
                alt="svg2"
            />
            </div>
            :
            null
            }
            {"animals".includes(props.category) || !props.category
            ?
            <div className={styles.svg}>
            <Image 
                onDragStart={startDragging}
                draggable
                src={Svg3} 
                alt="svg3"
            />
            </div>
            :
            null
            }
        </div>
    )
}