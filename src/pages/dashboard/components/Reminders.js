import React from "react";
import Card from "../../../components/Card";
import styles from "./Reminders.module.css";

const Reminders = () => {
  let rows = [];

  for (let i = 0; i < 100; i++) {
    rows.push(
      <div key={i} className={styles["reminder-card"]}>
        <div className={styles["reminder-text"]}>
          <span className={styles['text-title']}>Payment Reminder</span>
          <span className={styles['text-subtitle']}>[Name of Service]</span>
        </div>

        <div className={styles['reminder-time']}>
          <span className={styles.dot}></span>
          <span>19.47</span>
        </div>
      </div>
    );
  }
  return (
    <Card dark={true}>
      <div className={styles.title}>Reminders</div>
      <div className={styles.container}>
        <div className={styles.reminders}>{rows}</div>
      </div>
    </Card>
  );
};

export default Reminders;
