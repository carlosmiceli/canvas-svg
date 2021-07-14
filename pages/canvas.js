import { useState } from 'react';
import Sidebar from './svg-sidebar'
import styles from '../styles/Canvas.module.css'
import dynamic from 'next/dynamic';
const CanvasComponent = dynamic(() => import('../components/canvas/canvas'), { ssr: false });

export default function Canvas() {
    const [beginDraggingSvg, setBeginDraggingSvg] = useState({})

    return (
        <div className={styles.container}>
            <Sidebar setBeginDraggingSvg={setBeginDraggingSvg} />
            <div className={styles.canvasBox}>
                <CanvasComponent svgFile={beginDraggingSvg} />
            </div>
        </div>
    );
}