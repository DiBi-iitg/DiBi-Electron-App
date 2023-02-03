import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={props.dark ? styles.dark : styles.light}>
      {props.children}
    </div>
  );
};

export default Card;
