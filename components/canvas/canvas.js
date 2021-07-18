import { Stage, Layer, Path, Group, Transformer } from "react-konva";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { parse } from "svgson";
import styles from "../../styles/Canvas.module.css";

export default function CanvasComponent(props) {
  const [svg, setSvg] = useState(null);
  const [activateDrop, setActivateDrop] = useState(false);
  const [stageHeight, setStageHeight] = useState(null);
  const [stageWidth, setStageWidth] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [svgValues, setSvgValues] = useState(null);

  const stageCanvasRef = useRef(null);
  const svgRef = useRef(null);
  const transformerRef = useRef(null);

  useEffect(() => {
    setStageHeight(stageCanvasRef.current.getBoundingClientRect().height);
    setStageWidth(stageCanvasRef.current.getBoundingClientRect().width);
  }, []);

  useEffect(() => {
    if (svg) {
      localStorage.setItem("svg-file", JSON.stringify(svg));
    }
    let oldSvg = JSON.parse(localStorage.getItem("svg-file"));
    if (oldSvg && !svg) {
      setSvg(oldSvg);
      setActivateDrop(true);
    }
    let newSvgValues = JSON.parse(localStorage.getItem("new-svg-values"));
    if (newSvgValues) {
      setSvgValues(newSvgValues);
    }
  }, [svg]);

  const handleTransform = () => {
    let newSvgValues = {
      x: svgRef.current.attrs.x,
      y: svgRef.current.attrs.y,
      scaleX: svgRef.current.attrs.scaleX,
      scaleY: svgRef.current.attrs.scaleY,
      rotation: svgRef.current.attrs.rotation,
    };
    setSvgValues(newSvgValues);
    localStorage.setItem("new-svg-values", JSON.stringify(newSvgValues));
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleDrop = () => {
    setIsSelected(false);
    if (svg) {
      setSvg(null);
    }
    if (!activateDrop) {
      setActivateDrop(true);
    }
    axios
      .get(props.svgFile)
      .then(res => parse(res.data))
      .then(data => {
        setSvg(data);
      });
    handleTransform();
  };

  const checkDeselect = e => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setIsSelected(false);
    }
  };

  return (
    <div
      className={styles.canvas}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      ref={stageCanvasRef}
    >
      <Stage
        height={stageHeight}
        width={stageWidth}
        onMouseDown={checkDeselect}
      >
        <Layer>
          {activateDrop && svg ? (
            <Group
              ref={svgRef}
              onClick={() => setIsSelected(true)}
              draggable
              onDragEnd={handleTransform}
              onDragMove={handleTransform}
              onTransformEnd={handleTransform}
              x={svgValues.x}
              y={svgValues.y}
              rotation={svgValues.rotation}
              scaleX={svgValues.scaleX}
              scaleY={svgValues.scaleY}
            >
              {svg.children.map(s => {
                return (
                  <Path
                    data={s.attributes.d}
                    stroke={s.attributes.stroke}
                    strokeWidth={Number(s.attributes["stroke-width"]) || 0}
                    fill={s.attributes.fill}
                    key={s.attributes["data-ds-id"]}
                  />
                );
              })}
            </Group>
          ) : null}
          {activateDrop && svg && isSelected ? (
            <Transformer ref={transformerRef} nodes={[svgRef.current]} />
          ) : null}
        </Layer>
      </Stage>
    </div>
  );
}
