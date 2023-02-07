import React from 'react'
import DataChip from './DataChip'
import styles from './TotalFinancials.module.css'

const TotalFinancials = () => {
  return (

      <div className={styles["main-row"]}>
        <span className={styles.title}>Total Financials</span>
        <div className={styles["chip-row"]}>
          <DataChip title="Net Amount Sold" stat="&#x20B9; 20,75,500" increase={false} percent={5.6} />
          <DataChip title="Net Amount Bought" stat="&#x20B9; 2,15,000" increase={true} percent={7.1} />
        </div>
      </div>

  );
}

export default TotalFinancials