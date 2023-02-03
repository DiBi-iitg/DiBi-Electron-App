import React from "react";
import Card from "../../../components/Card";
import styles from "./CustomerCount.module.css";
import { RadialBarChart, RadialBar } from "recharts";
import arrow from "../../../assets/arrow.svg";

const CustomerCount = (props) => {
  const data = [
    { name: "A", x: 75, fill: "#22AFFF" },
    { name: "E", x: 100, fill: "transparent" },
  ];
  return (
    <Card>
      <div className={styles["customer-count"]}>
        <span className={styles.title}>Total Customer Count</span>
        <div className={styles.donut}>
            <span className={styles.label}>303</span>
          <RadialBarChart
            width={180}
            height={180}
            data={data}
            innerRadius={70}
            outerRadius={90}
            startAngle={90}
            endAngle={-270}
        
          >
            <RadialBar minAngle={0} dataKey="x" elevation={0} />
          </RadialBarChart>
        </div>
        <div className={styles["detail-row"]}>
          <a href="#" className={styles.details}>
            <div className={styles.flex}>
              View details
              <img src={arrow} />
            </div>
          </a>
        </div>
      </div>
    </Card>
  );
};

export default CustomerCount;
