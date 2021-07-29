import { useState } from "react";
import styles from "../../styles/Canvas.module.css";
import {
  AllInclusive,
  People,
  Pets,
  Home,
  WbSunny,
  EmojiEvents,
  BeachAccess,
  SportsSoccer,
  MoreHoriz,
} from "@material-ui/icons/";

export default function Categories(props) {
  const [expand, setExpand] = useState(true);

  const categories = [
    {
      name: "people",
      icon: <People />,
    },
    {
      name: "animals",
      icon: <Pets />,
    },
    {
      name: "indoors",
      icon: <Home />,
    },
    {
      name: "outdoors",
      icon: <WbSunny />,
    },
    {
      name: "events",
      icon: <EmojiEvents />,
    },
    {
      name: "holidays",
      icon: <BeachAccess />,
    },
    {
      name: "sports",
      icon: <SportsSoccer />,
    },
  ];

  const shortCategories = categories.slice(0, 4);

  const expandCat = () => {
    setExpand(!expand);
  };

  return (
    <div className={styles.categories}>
      <div
        className={styles.singleCat}
        onClick={() => props.setClickedCategory("all")}
      >
        <AllInclusive />
        <h3>All</h3>
      </div>
      {shortCategories.map(cat => {
        return (
          <div
            onClick={() => props.setClickedCategory(cat.name)}
            key={cat.name}
            className={styles.singleCat}
          >
            {cat.icon}
            <h3>{cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}</h3>
          </div>
        );
      })}
      {expand ? (
        <div onClick={expandCat} className={styles.singleCat}>
          <MoreHoriz />
          <h3>More</h3>
        </div>
      ) : (
        categories.slice(5).map(cat => {
          return (
            <div
              onClick={() => props.setClickedCategory(cat.name)}
              key={cat.name}
              className={styles.singleCat}
            >
              {cat.icon}
              <h3>{cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}</h3>
            </div>
          );
        })
      )}
    </div>
  );
}
