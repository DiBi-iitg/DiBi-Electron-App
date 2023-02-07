import styles from './ArrowLink.module.css'
import arrowU from "../assets/arrow.svg";
import React from 'react';


const ArrowLink = (props) => {
  return (
     <a href="#" className={styles.details}>
    <div className={styles.flex}>
      {props.name}
      <img src={arrowU} />
    </div>
     </a>
  )
};

export default ArrowLink;


