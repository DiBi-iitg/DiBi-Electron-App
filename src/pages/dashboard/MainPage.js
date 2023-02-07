import React from "react";
import styles from "./MainPage.module.css";
import Donut from "../../components/Donut";
import CustomersList from "./components/CustomersList";
import AvgData from "./components/AvgData";
import Campaigns from "./components/Campaigns";

const MainPage = () => {
  return (
    <div className={styles["db-grid"]}>
      <div>
        <AvgData
          title="Average Order Value"
          increase={true}
          stat={"1200"}
          percent="7.8"
        />
      </div>
      <div>
        <AvgData
          title="Total Value Sold"
          increase={false}
          stat={"29,90,829"}
          percent="9.5"
        />
      </div>
      <div>
        <AvgData
          title="Total Customer Count"
          increase={true}
          stat={"90,99,893"}
          percent="12.5"
        />
      </div>
      <div className={styles.e1}>
        <Donut a={60} b={80} c={70} d={90} />
      </div>
      <div className={styles.e2}>
        <CustomersList />
      </div>
      <div className={styles.e3}>
        <Campaigns />
      </div>
    </div>
  );
};

export default MainPage;
