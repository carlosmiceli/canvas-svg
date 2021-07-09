import { useState, useEffect } from 'react';
import axios from 'axios'
import styles from '../../styles/Canvas.module.css'
import { parse } from 'svgson'
import Svg1 from '../../images/Svg1.svg'
import Svg2 from '../../images/Svg2.svg'
import Svg3 from '../../images/Svg3.svg'
// import Konva from 'konva'

export default function Svgs() {
    const [svgs, setSvgs] = useState()

    let svgFiles = [Svg1, Svg2, Svg3]

    useEffect(() => {
        let svgData = [svgs]
        if (svgData[0] === undefined) {
            svgData.shift()
        }
        svgFiles.forEach(svg => {
            axios.get(svg.src)
            .then(res => parse(res.data))
            .then(data => {
                svgData.push(data)
            })
        })
        setSvgs(svgData)
    }, [])

    // var stage = new Konva.Stage({
    //     container: 'container',
    //     width: window.innerWidth,
    //     height: window.innerHeight,
    //   });

    //   var layer = new Konva.Layer();

    //   var path = new Konva.Path({
    //     x: 50,
    //     y: 40,
    //     data:
    //       'M12.582,9.551C3.251,16.237,0.921,29.021,7.08,38.564l-2.36,1.689l4.893,2.262l4.893,2.262l-0.568-5.36l-0.567-5.359l-2.365,1.694c-4.657-7.375-2.83-18.1.1,4.352-22.33c7.5.0.3.338,17.817-3.625,23.156,3.824c5.337,7.449,3.625,17.813-3.821,23.152l2.857,3.988c9.617-6.893,11.827-20.277,4.935-29.896C35.591,4.87,22.204,2.658,12.582,9.551z',
    //     fill: 'green',
    //     scale: {
    //       x: 2,
    //       y: 2,
    //     },
    //   });
    // setInterval(() => {
    //     // console.log(document.querySelector("#uno").value)
    //     const test = svgson.parse(testSvg).then((json) => {
    //         console.log(JSON.stringify(json, null, 2))
    //     })
    //     test()
    // }, 5000);

    //   // add the shape to the layer
    //   layer.add(path);

    //   // add the layer to the stage
    //   stage.add(layer);

    return (
        <div className={styles.svgList}>
            <div className={styles.svg}>
                <p>123</p>
            </div>
            <div className={styles.svg}>
                <p>123</p>
            </div>
            <div className={styles.svg}>
                <p>123</p>
            </div>
            <div className={styles.svg}>
                <p>123</p>
            </div>
            <div className={styles.svg}>
                <p>123</p>
            </div>
            <div className={styles.svg}>
                <p>123</p>
            </div>
            <div className={styles.svg}>
                <p>123</p>
            </div>
            <div className={styles.svg}>
                <p>123</p>
            </div>
        </div>
    )
}