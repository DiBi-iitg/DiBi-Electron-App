import React from "react";
import CustomerCount from "./CustomerCount";
import Card from "../../../components/Card";
import styles from "./Financials.module.css";
import AmountSold from "./AmountSold";

const Financials = () => {
  return (
    <Card dark={true}>
      <span className={styles.title}>Total Financials</span>
      <div className={styles.finances}>
        <AmountSold sold={true} />
        <AmountSold />
      </div>
    </Card>
  );
};

export default Financials;
