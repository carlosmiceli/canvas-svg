// import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import styles from '../../styles/Canvas.module.css'
import Svg1 from '../../images/svg1.svg'
import Svg2 from '../../images/svg2.svg'
import Svg3 from '../../images/svg3.svg'

export default function Svgs() {
    // const [svgs, setSvgs] = useState([Svg1, Svg2, Svg3])

    // useEffect(() => {
        // let svgData = [svgs]
        // if (svgData[0] === undefined || svgData.length > svgs.lenght) {
        //     svgData.shift()
        // }
        // svgFiles.forEach(svg => {
        //     axios.get(svg.src)
        //     .then(res => parse(res.data))
        //     .then(data => {
        //         svgData.push(data)
        //     })
        // })
        // setSvgs(svgData)
    // }, [])

    return (
        <div className={styles.svgList}>
            <div className={styles.svg}>
                <Image 
                    src={Svg1} 
                    alt="svg1"
                    category="Outdoors"
                />
            </div>
            <div className={styles.svg}>
                <Image 
                    src={Svg2} 
                    alt="svg2"
                    category="People"
                />
            </div>
            <div className={styles.svg}>
                <Image 
                    src={Svg3} 
                    alt="svg3"
                    category="Animals"
                />
            </div>
        </div>
    )
}