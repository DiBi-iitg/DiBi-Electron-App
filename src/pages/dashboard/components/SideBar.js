import React, { useState } from "react";
import styles from "./SideBar.module.css";
import dashBoardIcon from "../../../assets/dashboard.svg";
import profileIcon from "../../../assets/profile.svg";

const SideBar = () => {
  const [selected, setSelected] = useState(0);

  const toggleHandler = () => {

      setSelected((selected) => 1 - selected);

  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.list}>
        <span className={styles.title}>DiBi</span>
        <div
          className={`${selected === 0 ? styles["selected"] : ""} ${
            styles["icon-div"]
          }`}
          onClick={toggleHandler}
        >
          <img className={styles.icon} src={dashBoardIcon}></img>
        </div>
        <div
          className={`${selected === 1 ? styles["selected"] : ""} ${
            styles["icon-div"]
          } `}
          onClick={toggleHandler}
        >
          <img className={styles.icon} src={profileIcon}></img>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
