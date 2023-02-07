import React from "react";
import styles from "./MainPage.module.css";
import Donut from "../../components/Donut";
import Reminders from "./components/Reminders";

import Financials from "./components/Financials";
import BillReport from "./components/BillReport";
import ConsumerDetails from "./components/ConsumerDetails";

const MainPage = () => {
  return (
    <div className={styles["db-grid"]}>
      <Financials />

      <div className={styles.e1}>

      </div>
      <div className={styles.e2}>
        <Donut a={60} b={80} c={70} d={90} />
      </div>
      <div className={styles.e3}>
        <BillReport />
      </div>
      <div className={styles.e4}>
        <Reminders />
      </div>
      <div className={styles.e5}>
        <ConsumerDetails />
      </div>
    </div>
  );
};

export default MainPage;
