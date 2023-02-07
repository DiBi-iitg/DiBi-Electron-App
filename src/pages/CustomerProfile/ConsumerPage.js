import React from "react";
import DataChip from "./components/DataChip";
import styles from "./ConsumerPage.module.css";
import img1 from "../../assets/customer.svg";
import img2 from "../../assets/cash.svg";
import Card from "../../components/Card";
import Donut from "../../components/Donut";
import CustomersList from "./components/CustomersList";


const ConsumerPage = () => {
  return (
    <div className={styles["cp-grid"]}>
      <div className={styles.e1}>
        <Card dark={true}>
          <div className={styles.e8}>
            <DataChip title="Total Customer" stat="800" logo={img1} />
            <DataChip title="Total Customer" stat="800" logo={img1} />
          </div>
        </Card>
      </div>
      <div className={styles.e2}>
        <DataChip title="Total Value Sold" stat="$80,000" logo={img2} />
      </div>

      <div className={styles.e4}>
        <Donut a={60} b={80} c={70} d={90} consumer={true} />
      </div>
      <div className={styles.e5}>
        <CustomersList />
      </div>
      <div className={styles.e6}></div>
    </div>
  );
};

export default ConsumerPage;
