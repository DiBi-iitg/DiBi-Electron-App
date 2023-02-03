import React from "react";
import Card from "../../../components/Card";
import styles from "./BillReport.module.css";
import arrow from "../../../assets/arrow-down.svg";
import arrowU from "../../../assets/arrow.svg";

const BillReport = () => {
let rows = [];

for (let i = 0; i < 100; i++) {
    rows.push(
      <Card key={i}>
        <div className={styles["consumer-card"]}>
          <div className={styles.divider}></div>
          <div className={styles["consumer-detail"]}>
            <span className={styles["main-title"]}>Consumer Name</span>
            <span className={styles["sub-title"]}>Invoice Number</span>
          </div>
          <span className={styles.price}>$800</span>
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
      </Card>
    );
    
}


  return (
    <Card dark={true}>
      <div className={styles["title-bar"]}>
        <div className={styles.title}>Bill Report</div>
        <div className={styles["bill-btn"]}>
          <div className={styles.arrow}>
            <img src={arrow} />
          </div>

          <span>Bills in</span>
        </div>
      </div>
      <div className={styles.wrapper}>

        {rows}
      </div>
      
    </Card>
  );
};

export default BillReport;
