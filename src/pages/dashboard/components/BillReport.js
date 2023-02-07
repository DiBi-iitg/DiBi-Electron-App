import React from "react";
import Card from "../../../components/Card";
import styles from "./BillReport.module.css";
import arrow from "../../../assets/arrow-down.svg";
import ArrowLink from "../../../components/ArrowLink";

const BillReport = () => {
  let rows = [];

  for (let i = 0; i < 100; i++) {
    rows.push(
      <div key={i} className={styles.card}>
        <div className={styles["consumer-card"]}>
          <div className={styles.divider}></div>
          <div className={styles["consumer-detail"]}>
            <span className={styles["main-title"]}>Consumer Name</span>
            <span className={styles["sub-title"]}>Invoice Number</span>
          </div>
          <span className={styles.price}>$800</span>
          <div className={styles["details-date"]}>
            <div className={styles["date-time"]}>12:00 pm, 21st Feb 2023</div>
            <div className={styles["detail-row"]}></div>
            <ArrowLink name="View Details" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Card dark={true}>
      <div className={styles["title-bar"]}>
        <div className={styles.title}>Bill Report</div>
        <ArrowLink name="View all" />
      </div>
      <div className={styles.wrapper}>{rows}</div>
    </Card>
  );
};

export default BillReport;
