import { useState } from 'react';
import Sidebar from './svg-sidebar'
import styles from '../styles/Canvas.module.css'

export default function Canvas() {
    const [sidebar, setSidebar] = useState(true)

    const handleViewSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <div className={styles.container}>
            <Sidebar isOpen={sidebar} />
            <div className={styles.canvasBox}>
                <div className={styles.canvas} />
            </div>
        </div>
    );
}