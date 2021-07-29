import Head from "next/head";
import { useState } from "react";
import Sidebar from "../components/sidebar/svg-sidebar";
import styles from "../styles/Canvas.module.css";
import dynamic from "next/dynamic";
const CanvasComponent = dynamic(() => import("../components/canvas/canvas"), {
  ssr: false,
});

export default function Canvas() {
  const [beginDraggingSvg, setBeginDraggingSvg] = useState({});

  return (
    <div className={styles.container}>
      <Head>
        <title>Canvas by Carlos Miceli</title>
        <meta name="description" content="Canvas MVP by Carlos Miceli" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar setBeginDraggingSvg={setBeginDraggingSvg} />
      <CanvasComponent svgFile={beginDraggingSvg} />
    </div>
  );
}
