import { useState } from 'react';
import Sidebar from './svg-sidebar'
import styles from '../styles/Canvas.module.css'
import dynamic from 'next/dynamic';
const CanvasComponent = dynamic(() => import('../components/canvas/canvas'), { ssr: false });

export default function Canvas() {
    const [sidebar, setSidebar] = useState(true)

    const handleViewSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <div className={styles.container}>
            <Sidebar isOpen={sidebar} />
            <div className={styles.canvasBox}>
                <CanvasComponent/>
            </div>
        </div>
    );
}