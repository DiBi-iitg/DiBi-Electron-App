import React from 'react'
import styles from './CustomersList.module.css'
import Card from '../../../components/Card'
import arrowU from '../../../assets/arrow.svg'
import arrow from "../../../assets/arrow-down.svg";
import ArrowLink from '../../../components/ArrowLink'

const CustomersList = () => {
  let rows = [];


    rows.push(
      <div className={styles["consumer-card"]}>
        <div className={styles.divider}></div>
        <div className={styles["consumer-detail"]}>
          <span className={styles["main-title"]}>Ashneer Grover</span>
          <span className={styles["sub-title"]}>Male, 2 visits per week</span>
        </div>
        <span className={styles.price}>₹800</span>
        <div className={styles["details-date"]}>
          <div className={styles["date-time"]}>12:00 pm, 21st Feb 2023</div>
          <div className={styles["detail-row"]}>
            <a href="#" className={styles.details}>
              <div className={styles.flex}>
                View details
                <img src={arrowU} />
              </div>
            </a>
          </div>
        </div>
      </div>
    );


  return (
    <Card dark={true}>
      <div className={styles["title-bar"]}>
        <div className={styles.title}>Customer List</div>
       <ArrowLink name="View All"/>
      </div>
      <div className={styles.wrapper}>{rows}</div>
    </Card>
  );
}

export default CustomersList