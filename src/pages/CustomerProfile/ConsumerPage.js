import React from "react";
import styles from "./ConsumerPage.module.css";
import Card from "../../components/Card";
import Donut from "../../components/Donut";
import CustomersList from "./components/CustomersList";
import TotalFinancials from "./components/TotalFinancials";
import CustomerDashboardCard from "./components/CustomerDashboardCard";
import Reminders from "../Dashboard/components/Reminders";
import BillReport from "../Dashboard/components/BillReport";

const ConsumerPage = () => {
  return (
    <div className={styles["cp-grid"]}>
      <div className={styles.e1}>
        <Card dark={true}>
          <div className={styles.e2}>
            <TotalFinancials />
          </div>
        </Card>
      </div>
      <div className={styles.e3}>
        <CustomerDashboardCard />
      </div>

      <div className={styles.e4}>
        <Donut a={60} b={80} c={70} d={90} consumer={true} />
      </div>
      <div className={styles.e5}>
        <BillReport />
      </div>
      <div className={styles.e6}>
        <Reminders />
      </div>
    </div>
  );
};

export default ConsumerPage;
