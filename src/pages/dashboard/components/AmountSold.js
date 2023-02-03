import React from "react";
import Card from "../../../components/Card";
import styles from "./AmountSold.module.css";
import { BarChart, Bar, XAxis } from "recharts";
import imgi from "../../../assets/sold.svg";

const AmountSold = (props) => {
  const data = [
    {
      name: "Sun",
      sell: 2400,
    },
    {
      name: "Mon",
      sell: 1398,
    },
    {
      name: "Tue",
      sell: 900,
    },
    {
      name: "Wed",
      sell: 3908,
    },
    {
      name: "Thurs",
      sell: 4800,
    },
    {
      name: "Fri",
      //   sell: 3800,
    },
    {
      name: "Sat",
      //   sell: 4300,
    },
  ];

  return (
    <Card>
      <div className={styles.amount}>
        <div className={styles.title}>
          <img src={imgi} />
          <span className={styles["title-text"]}>
            Net Amount {props.sold ? "Sold" : "Bought"}
          </span>
        </div>
        <BarChart
          width={220}
          height={180}
          data={data}
          
        >
          <XAxis dataKey="name" axisLine={false} tickLine={false} />

          <Bar
            height={150}
            label={{ fontSize: 10, position: "top", fill: "white" }}
            dataKey="sell"
            fill="#22AFFF"
          />
        </BarChart>
        <div className={styles.date}>21st Nov 2022</div>
        <div className={styles.total}>
          <span>Total:$75,000</span>
          <span>Today:$2000</span>
        </div>
      </div>
    </Card>
  );
};

export default AmountSold;
