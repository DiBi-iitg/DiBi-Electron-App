import React, { useState } from "react";
import styles from "./SideBar.module.css";
import dashBoardIcon from "../../../assets/dashboard.svg";
import profileIcon from "../../../assets/profile.svg";

const SideBar = (props) => {
  
  

  return (
    <div className={styles.sidebar}>
      <div className={styles.list}>
        <span className={styles.title}>DiBi</span>
        <div
          className={`${props.selected === 0 ? styles["selected"] : ""} ${
            styles["icon-div"]
          }`}
          onClick={() => {
            props.toggleHandler(0);
          }}
        >
          <img
            className={`${styles.icon} ${
              props.selected === 0 ? styles["icon-selected"] : ""
            }`}
            src={dashBoardIcon}
          ></img>
        </div>
        <div
          className={`${props.selected === 1 ? styles["selected"] : ""} ${
            styles["icon-div"]
          } `}
          onClick={() => {
            props.toggleHandler(1);
          }}
        >
          <img
            className={`${styles.icon} ${
              props.selected === 1 ? styles["icon-selected"] : ""
            }`}
            src={profileIcon}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
