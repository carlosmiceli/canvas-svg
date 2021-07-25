import { Stage, Layer, Path, Group, Transformer } from "react-konva";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { parse } from "svgson";
import styles from "../../styles/Canvas.module.css";
import { Button } from "@material-ui/core/";

export default function CanvasComponent(props) {
  const [svg, setSvg] = useState(null);
  const [activateDrop, setActivateDrop] = useState(false);
  const [stageHeight, setStageHeight] = useState(null);
  const [stageWidth, setStageWidth] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [svgValues, setSvgValues] = useState(null);
  const [localStorageSvg, setLocalStorageSvg] = useState(false);
  // const [svgList, setSvgList] = useState([])

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
    if (oldSvg && !svg && !localStorageSvg) {
      console.log(oldSvg);
      setSvg(oldSvg);
      setActivateDrop(true);
      setLocalStorageSvg(true);
    }
    let oldSvgValues = JSON.parse(localStorage.getItem("new-svg-values"));
    if (oldSvgValues) {
      setSvgValues(oldSvgValues);
    }
  }, [svg, localStorageSvg]);

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
      setSvgValues(null);
      localStorage.removeItem("new-svg-values");
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
  };

  const checkDeselect = e => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setIsSelected(false);
      window.removeEventListener("keydown", function (e) {
        handleDelete(e);
      });
    }
  };

  const handleDelete = () => {
    setSvg(null);
    setSvgValues(null);
    setIsSelected(false);
    localStorage.removeItem("svg-file");
    localStorage.removeItem("new-svg-values");
  };

  if (isSelected) {
    window.addEventListener("keydown", function (e) {
      if (e.key === "Backspace") {
        handleDelete();
      }
    });
  }

  if (!isSelected) {
    window.removeEventListener("keydown", function (e) {
      handleDelete(e);
    });
  }

  return (
    <div
      className={styles.canvas}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      ref={stageCanvasRef}
    >
      <Button download variant="contained" color="primary">
        <a
          href={svgRef.current ? svgRef.current.toDataURL() : undefined}
          download
        >
          Download Image
        </a>
      </Button>
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
              x={svgValues ? svgValues.x : undefined}
              y={svgValues ? svgValues.y : undefined}
              rotation={svgValues ? svgValues.rotation : undefined}
              scaleX={svgValues ? svgValues.scaleX : undefined}
              scaleY={svgValues ? svgValues.scaleY : undefined}
            >
              {svg.children.map(s => {
                return (
                  <Path
                    data={s.attributes.d}
                    stroke={s.attributes.stroke}
                    strokeWidth={Number(s.attributes["stroke-width"]) || 0}
                    fill={s.attributes.fill}
                    opacity={Number(s.attributes.opacity) || 0}
                    lineCap={s.attributes["stroke-linecap"]}
                    lineJoin={s.attributes["stroke-linejoin"]}
                    miterLimit={s.attributes["stroke-miterlimit"]}
                    id={s.attributes["data-ds-id"]}
                    key={s.attributes["data-ds-id"]}
                  />
                );
              })}
            </Group>
          ) : null}
          {activateDrop && svg && isSelected && svgRef.current ? (
            <Transformer ref={transformerRef} nodes={[svgRef.current]} />
          ) : null}
        </Layer>
      </Stage>
    </div>
  );
}
