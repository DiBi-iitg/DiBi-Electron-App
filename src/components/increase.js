import React from "react";
import styles from "./increase.module.css";
import img from "../assets/increase.svg";

const IncreaseCard = () => {
  return (
    <div className={styles.card}>
      <img src={img} />
      <span>5.6%</span>
    </div>
  );
};

export default IncreaseCard;
