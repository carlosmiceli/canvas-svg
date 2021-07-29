import { Stage, Layer, Path, Group, Transformer } from "react-konva";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { parse } from "svgson";
import styles from "../../styles/Canvas.module.css";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import DeleteIcon from "@material-ui/icons/Delete";

export default function CanvasComponent(props) {
  const [stageHeight, setStageHeight] = useState(null);
  const [stageWidth, setStageWidth] = useState(null);
  const [isSelected, setIsSelected] = useState(null);
  const [localStorageSvg, setLocalStorageSvg] = useState(false);
  const [pathColor, setPathColor] = useState({
    pathId: null,
    pathIndex: null,
    color: null,
  });
  const [svgList, setSvgList] = useState([]);
  const [deleteSvg, setDeleteSvg] = useState(false);
  const [copySvg, setCopySvg] = useState(false);
  const [tempSvg, setTempSvg] = useState(null);

  const stageCanvasRef = useRef(null);
  const stageRef = useRef(null);
  const svgRefs = useRef([]);
  const colorRef = useRef(null);
  const transformerRef = useRef(null);

  useEffect(() => {
    setStageHeight(stageCanvasRef.current.getBoundingClientRect().height);
    setStageWidth(stageCanvasRef.current.getBoundingClientRect().width);
  }, []);

  useEffect(() => {
    if (svgList.length > 0) {
      localStorage.setItem("svglist", JSON.stringify(svgList));
    }
    if (localStorageSvg && svgList.length === 0) {
      localStorage.removeItem("svglist");
    }
    let oldCanvas = JSON.parse(localStorage.getItem("svglist"));
    if (oldCanvas && svgList.length === 0 && !localStorageSvg) {
      setSvgList(oldCanvas);
      setLocalStorageSvg(true);
    }
  }, [svgList, localStorageSvg]);

  useEffect(() => {
    svgRefs.current = svgRefs.current.slice(0, svgList.length);
  }, [svgList]);

  const handleDrag = i => {
    let reorderSvgsIndex = svgList;
    let pushedSvg = svgList[i];
    reorderSvgsIndex.splice(i, 1);
    reorderSvgsIndex.push(pushedSvg);
    setSvgList(reorderSvgsIndex);
    localStorage.setItem("svglist", JSON.stringify(svgList));
  };

  const handleTransform = i => {
    let transformValues = {
      x: svgRefs.current[i].attrs.x,
      y: svgRefs.current[i].attrs.y,
      scaleX: svgRefs.current[i].attrs.scaleX,
      scaleY: svgRefs.current[i].attrs.scaleY,
      rotation: svgRefs.current[i].attrs.rotation,
    };
    let updatedSvgs = svgList;
    updatedSvgs[i] = { ...svgList[i], ...transformValues };
    setSvgList(updatedSvgs);
    localStorage.setItem("svglist", JSON.stringify(svgList));
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleDrop = e => {
    let dropCoordinates = {
      x: e.nativeEvent.layerX,
      y: e.nativeEvent.layerY,
    };
    axios
      .get(props.svgFile)
      .then(res => parse(res.data))
      .then(data => {
        setSvgList([...svgList, { ...data, ...dropCoordinates }]);
      });
    setIsSelected(null);
  };

  const selectSvg = index => {
    if (isSelected !== index) {
      setIsSelected(index);
    }
  };

  const checkDeselect = e => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setIsSelected(null);
      setDeleteSvg(false);
    }
  };

  const getPathColor = (pathId, pathIndex, color) => {
    setPathColor({
      pathId,
      pathIndex,
      color,
    });
    if (color === "none") colorRef.current.value = "#000000";
    else colorRef.current.value = color.substring(0, color.length - 2);
  };

  const changePathColor = e => {
    let updatedSvgs = svgList;
    updatedSvgs[isSelected].children[pathColor.pathIndex].attributes.fill =
      e.target.value;
    setSvgList(updatedSvgs);
    localStorage.setItem("svglist", JSON.stringify(svgList));
    setPathColor({ ...pathColor, color: e.target.value });
  };

  const deleteSvgBackspace = () => {
    setDeleteSvg(true);
    setTimeout(() => {
      setDeleteSvg(false);
    }, 10);
  };

  window.addEventListener("keydown", e => {
    if (e.key === "Backspace") {
      deleteSvgBackspace();
    }
    if (e.key === 17 || e.key === "Meta") {
      setCopySvg(true);
    }
    if (copySvg && e.key === "c") {
      setTempSvg(svgList[isSelected]);
    }
    if (copySvg && tempSvg && e.key === "v") {
      setSvgList([...svgList, tempSvg]);
    }
  });

  window.addEventListener("keyup", e => {
    if (e.key === 17 || e.key === "Meta") {
      setCopySvg(false);
    }
  });

  useEffect(() => {
    if (deleteSvg && isSelected !== null) {
      let filteredSvgs = svgList;
      filteredSvgs.splice(isSelected, 1);
      setSvgList(filteredSvgs);
      localStorage.setItem("svglist", JSON.stringify(svgList));
      setIsSelected(null);
    }
  }, [deleteSvg, isSelected, svgList]);

  const handleDownload = e => {
    if (svgList.length > 0) {
      if (!confirm("Do you want to download this canvas?")) {
        e.preventDefault();
      }
    } else {
      e.preventDefault();
      alert("Nothing to download!");
    }
  };

  const handleDeleteAll = e => {
    if (svgList.length > 0) {
      if (!confirm("Do you want to delete this canvas?")) {
        e.preventDefault();
      }
    } else {
      e.preventDefault();
      alert("Nothing to delete!");
    }
  };

  return (
    <div className={styles.canvasBox}>
      <div className={styles.canvasIconSection}>
        <input ref={colorRef} type="color" onChange={changePathColor} />
        <a
          onClick={handleDownload}
          href={stageRef.current ? stageRef.current.toDataURL() : undefined}
          download
        >
          <SystemUpdateAltIcon
            className={styles.canvasIcon}
            variant="contained"
            fontSize="small"
          />
        </a>
        <DeleteIcon
          className={styles.canvasIcon}
          variant="contained"
          fontSize="small"
          onClick={handleDeleteAll}
        />
      </div>
      <div
        className={styles.canvasEditor}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        ref={stageCanvasRef}
      >
        <Stage
          height={stageHeight}
          width={stageWidth}
          onMouseDown={checkDeselect}
          ref={stageHeight && stageWidth ? stageRef : null}
        >
          <Layer>
            {svgList
              ? svgList.map((svg, index) => {
                  return (
                    <Group
                      key={index}
                      ref={el => (svgRefs.current[index] = el)}
                      onClick={() => {
                        selectSvg(index);
                      }}
                      draggable
                      onDragEnd={() => {
                        handleTransform(index);
                      }}
                      onDragStart={e => {
                        e.target.moveToTop();
                      }}
                      onTransformEnd={() => {
                        handleTransform(index);
                      }}
                      x={svg.x || 50}
                      y={svg.y || 50}
                      rotation={svg.rotation || undefined}
                      scaleX={svg.scaleX || 0.5}
                      scaleY={svg.scaleY || 0.5}
                    >
                      {svg.children.map((path, index) => {
                        return (
                          <Path
                            data={path.attributes.d}
                            stroke={path.attributes.stroke}
                            strokeWidth={
                              Number(path.attributes["stroke-width"]) || 0
                            }
                            fill={
                              pathColor.pathId === path.attributes["data-ds-id"]
                                ? pathColor.color
                                : path.attributes.fill
                            }
                            opacity={Number(path.attributes.opacity) || 0}
                            lineCap={path.attributes["stroke-linecap"]}
                            lineJoin={path.attributes["stroke-linejoin"]}
                            miterLimit={path.attributes["stroke-miterlimit"]}
                            id={path.attributes["data-ds-id"]}
                            key={path.attributes["data-ds-id"]}
                            onClick={() => {
                              getPathColor(
                                path.attributes["data-ds-id"],
                                index,
                                path.attributes.fill
                              );
                            }}
                          />
                        );
                      })}
                    </Group>
                  );
                })
              : null}
            {svgRefs.current[isSelected] ? (
              <Transformer
                ref={transformerRef}
                nodes={[svgRefs.current[isSelected]]}
              />
            ) : null}
          </Layer>
        </Stage>
      </div>
    </div>
  );
}
