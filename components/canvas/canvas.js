import { Stage, Layer, Path } from 'react-konva';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { parse } from 'svgson'
import Svg1 from '../../images/svg1.svg'
import styles from '../../styles/Canvas.module.css'


export default function CanvasComponent() {
    const [svg, setSvg] = useState(null)

    useEffect(() => {
        // let svgData = [svgs]
        // if (svgData[0] === undefined || svgData.length > svgs.lenght) {
        //     svgData.shift()
        // }
        // svgFiles.forEach(svg => {
            axios.get(Svg1.src)
            .then(res => parse(res.data))
            .then(data => {
                setSvg(data)
            })
        // })
        // setSvgs(svgData)
    }, [])
    // const generateShapes = () => {
        //     return [...Array(10)].map((_, i) => ({
        //         id: i.toString(),
        //         x: Math.random() * window.innerWidth,
        //         y: Math.random() * window.innerHeight,
        //         rotation: Math.random() * 180,
        //         isDragging: false,
        //     }));
        // }

        // const someHandler = () => {
        //     // Access reference value:
        //     const value = reference.current;
        //     const newValue = 1
        //     // Update reference value:
        //     reference.current = newValue;
        //   };

    return (
        <div className={styles.canvas}>
            <Stage height={500} width={500} draggable>       
                <Layer>
                    {svg && svg.children.map(s => {
                        return(
                            <Path 
                                data={s.attributes.d}
                                stroke={s.attributes.stroke}
                                strokeWidth={s.attributes['stroke-width']}
                                fill={s.attributes.fill}
                                key={Math.random()}
                            />                    
                        )
                    })}
                </Layer>
            </Stage>
        </div>
    )
}

    

