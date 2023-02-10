import React from 'react'
import IncreaseCard from '../../../components/increase'
import styles from './AvgData.module.css'

const AvgData = (props) => {
  return (
    <div className={styles.chip}>
      <div className={styles.data}>
        <div className={styles["front-row"]}>
          <span className={styles["main-data"]}>{props.title}</span>
          <IncreaseCard increase={props.increase} percent={props.percent} />
        </div>
        <span className={styles["sub-data"]}>{props.rupee==null ? '₹' : ''} {props.stat}</span>
      </div>
    </div>
  );
}

export default AvgData