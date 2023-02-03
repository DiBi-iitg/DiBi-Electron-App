import React from "react";
import SideBar from "./components/SideBar";
import styles from "./MainPage.module.css";
import Card from "../../components/Card";
import Donut from "../../components/Donut";
import Header from "./components/Header";
import img from "../../assets/filter.png";
import Reminders from "./components/Reminders";
import CustomerCount from "./components/CustomerCount";
import Financials from "./components/Financials";
import BillReport from "./components/BillReport";

const MainPage = () => {
  return (
    <>
      <SideBar />
      <div className={styles.body}>
        <Header />
        <button className={styles.filter}>
          <div className={styles["filter-row"]}>
            <img src={img} />
            <span>Filter</span>
          </div>
        </button>
        <div className={styles["db-grid"]}>
          <Financials />

          <div className={styles.e1}>
            <CustomerCount />
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
        </div>
      </div>
    </>
  );
};

export default MainPage;
