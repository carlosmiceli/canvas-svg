import { useState } from "react";
import styles from "../../styles/Canvas.module.css";
import Categories from "../categories/categories";
import Svgs from "../svgs/svgs";
import { TextField, IconButton, InputAdornment } from "@material-ui/core/";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export default function Sidebar(props) {
  const [clickedCategory, setClickedCategory] = useState("");
  const [sidebarVisibility, setSidebarVisibility] = useState(true);

  const handleSearch = e => {
    setClickedCategory(e.target.value);
  };

  const handleSidebarVisibility = () => {
    setSidebarVisibility(!sidebarVisibility);
  };

  return (
    <div className={sidebarVisibility ? styles.sidebar : styles.sidebarClose}>
      <div className={styles.arrowSidebarDiv}>
        <ArrowBackIosIcon
          className={
            sidebarVisibility
              ? styles.arrowSidebarOpen
              : styles.arrowSidebarClose
          }
          onClick={handleSidebarVisibility}
        />
      </div>
      <div
        className={`${styles.searchSidebar} ${
          sidebarVisibility ? "" : styles.hidden
        }`}
      >
        <TextField
          label="Search"
          onChange={handleSearch}
          placeholder="Tree, dog, house..."
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div
        className={`${styles.svgContainer} ${
          sidebarVisibility ? "" : styles.hidden
        }`}
      >
        <Categories setClickedCategory={setClickedCategory} />
        <Svgs
          category={clickedCategory}
          setBeginDraggingSvg={props.setBeginDraggingSvg}
        />
      </div>
    </div>
  );
}
