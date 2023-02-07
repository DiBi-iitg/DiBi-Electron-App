import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {

  return (
    <div className={styles["main-header"]}>
      <div className={styles.name}>
        <span className={styles.t1}>
          {props.consumer ? "Welcome Back to," : "Welcome Back,"}
        </span>
        <span className={styles.t2}>
          {props.consumer ? "Consumer Profile" : "Rishikesh Kumar"}
        </span>
      </div>
      <div className={styles.trailing}>
        <input type="search" className={styles.search} placeholder="Search" />
        <div className={styles.dp}></div>
      </div>
    </div>
  );
};

export default Header;
