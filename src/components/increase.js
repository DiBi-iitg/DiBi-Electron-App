import React from "react";
import styles from "./increase.module.css";
import img1 from "../assets/increase.svg";
import img2 from "../assets/decrease.svg";

const IncreaseCard = (props) => {
  const increase = props.increase ?? false;

  return (
    <div
      className={`${styles.card}  ${
        increase ? styles.increase : styles.decrease
      } `}
    >
      <img src={increase ? img1 : img2} />
      <span>{props.percent}%</span>
    </div>
  );
};

export default IncreaseCard;
