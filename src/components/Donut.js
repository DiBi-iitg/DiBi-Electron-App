import React from "react";

import { RadialBarChart, RadialBar } from "recharts";
import Card from "./Card";
import styles from "./Donut.module.css";
import arrow from "../assets/arrow.svg";

const Donut = (props) => {
  let consumer = props.consumer;
  const data = [
    { name: "A", x: props.a, fill: "#EEF8FF" },
    { name: "B", x: props.b, fill: "#22AFFF" },
    { name: "C", x: props.c, fill: "#85B6FF" },
    { name: "D", x: props.d, fill: "#172A73" },
    { name: "E", x: 100, fill: "transparent" },
  ];

  return (
    <Card dark={consumer}>
      <div className={styles["customer-count"]}>
        <span className={styles.title}>
          {consumer ? "Inventory Categorization" : "Total Inventory Sold"}
        </span>
        <div className={styles.donut}>
          <span className={styles.label}>
            {consumer ? (
              <div className={styles["center-div"]}>
                <span>2000</span>
                <span className={styles['center-subheading']}>Items Purchased</span>
              </div>
            ) : (
              "$2000"
            )}
          </span>
          <RadialBarChart
            width={250}
            height={250}
            data={data}
            innerRadius={70}
            outerRadius={150}
            startAngle={90}
            endAngle={-270}
          >
            <RadialBar
              minAngle={0}
              dataKey="x"
              elevation={0}
              cornerRadius={8}
            />
          </RadialBarChart>
        </div>
        <div className={styles["color-palette"]}>
          <div className={styles["color-segment"]}>
            <div className={`${styles.palette} ${styles.blue1}`}></div>
            <span className={styles["color-text"]}>Food</span>
          </div>
          <div className={styles["color-segment"]}>
            <div className={`${styles.palette} ${styles.dim}`}></div>

            <span className={styles["color-text"]}>Stationary</span>
          </div>
          <div className={styles["color-segment"]}>
            <div className={`${styles.palette} ${styles.white1}`}></div>

            <span className={styles["color-text"]}>Clothes</span>
          </div>
          <div className={styles["color-segment"]}>
            <div className={`${styles.palette} ${styles.ocean}`}></div>

            <span className={styles["color-text"]}>Drinks</span>
          </div>
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

export default Donut;
