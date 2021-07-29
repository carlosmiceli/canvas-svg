import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Canvas.module.css";
import Svg1 from "../../public/svg1.svg";
import Svg2 from "../../public/svg2.svg";
import Svg3 from "../../public/svg3.svg";
import Travolta from "../../public/travolta.gif";

export default function Svgs(props) {
  const startDragging = ev => {
    let dragData = ev.target.src.replace("http://localhost:3000", "");
    props.setBeginDraggingSvg(dragData);
  };

  return (
    <div className={styles.svgList}>
      {"outdoors".includes(props.category) ||
      !props.category ||
      props.category === "all" ? (
        <div className={styles.svgImageContainer}>
          <Image onDragStart={startDragging} draggable src={Svg1} alt="svg1" />
        </div>
      ) : null}
      {"people".includes(props.category) ||
      !props.category ||
      props.category === "all" ? (
        <div className={styles.svgImageContainer}>
          <Image onDragStart={startDragging} draggable src={Svg2} alt="svg2" />
        </div>
      ) : null}
      {"animals".includes(props.category) ||
      !props.category ||
      props.category === "all" ? (
        <div className={styles.svgImageContainer}>
          <Image onDragStart={startDragging} draggable src={Svg3} alt="svg3" />
        </div>
      ) : null}
      {!"outdoors".includes(props.category) &&
      !"people".includes(props.category) &&
      !"animals".includes(props.category) &&
      props.category !== "all" ? (
        <div className={styles.svgError}>
          <Image src={Travolta} alt="Travolta" />
          <p>No images found!</p>
        </div>
      ) : null}
    </div>
  );
}
