import React from "react";
import styles from "./Campaigns.module.css";
import Card from "../../../components/Card";

const Campaigns = () => {
  return (
    <Card dark={true}>
      <div className={styles.title}>Previous Campaigns</div>
      <div className={styles.container}>
        <div className={styles.reminders}>
          <div className={styles.card}>
            <div className={styles["text-flex"]}>
              <span>Number Of Campaigns</span>
              <span className={styles.bold}>560</span>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles["text-flex"]}>
              <span>Number Of Users</span>
              <span className={styles.bold}>6,90,000</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Campaigns;
