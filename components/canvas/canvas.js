import { Stage, Layer, Path, Transformer } from 'react-konva';
import { useState } from 'react';
import axios from 'axios'
import { parse } from 'svgson'
import styles from '../../styles/Canvas.module.css'


export default function CanvasComponent(props) {
    const [svg, setSvg] = useState(null)
    const [activateDrop, setActivateDrop] = useState(false)

    const handleDragOver = (e) => {
        e.preventDefault()
    }

    const handleDrop = () => {
        setActivateDrop(true)
        axios.get(props.svgFile)
        .then(res => parse(res.data))
        .then(data => {
            setSvg(data)
        })
    }

    

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
        <div className={styles.canvas} onDragOver={handleDragOver} onDrop={handleDrop}>
            {activateDrop && svg
                    ?
            <Stage height={500} width={500} draggable>       
                <Layer>
                    {
                    svg.children.map(s => {
                        return(
                            <Path 
                                data={s.attributes.d}
                                stroke={s.attributes.stroke}
                                strokeWidth={s.attributes['stroke-width']}
                                fill={s.attributes.fill}
                                key={Math.random()}
                            />                    
                        )
                        })
                    }
                </Layer>
            </Stage>  
            :
            null
            }     
        </div>
    )
}

    

