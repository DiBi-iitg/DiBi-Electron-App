import React from "react";
import CustomerCount from "./CustomerCount";
import Card from "../../../components/Card";
import styles from "./Financials.module.css";
import AmountSold from "./AmountSold";

const Financials = () => {
  return (
    
      <div className={styles.financials}>
        <span className={styles.title}>Total Financials</span>
        <div className={styles.finances}>
          <AmountSold sold={true} />
          <AmountSold />
        </div>
      </div>

  );
};

export default Financials;
