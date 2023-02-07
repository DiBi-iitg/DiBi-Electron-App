import React, { useState } from "react";
import SideBar from "./pages/dashboard/components/SideBar";
import styles from "./App.module.css";
import Header from "./components/Header";
import MainPage from "./pages/dashboard/MainPage";
import img from "./assets/filter.png";
import img1 from './assets/arrow-down-black.svg'
import VendorPage from './pages/VendorSide/VendorPage'
import ConsumerPage from './pages/CustomerProfile/ConsumerPage'

const App = () => {
  const [selected, setSelected] = useState(0);

  const toggleHandler = (number) => {
    setSelected(number);
  };
  return (
    <>
      <SideBar toggleHandler={toggleHandler} selected={selected} />
      <div className={styles.body}>
        <Header consumer={selected !== 0} />
        <button className={styles.filter}>
          <div className={styles["filter-row"]}>
            {selected == 0 ? (
              <>
                <span>Daily</span>
                <img src={img1} />
              </>
            ) : (
              <>
                <img src={img} />
                <span>Filter</span>
              </>
            )}
          </div>
        </button>
        <VendorPage/>
        {/* {selected === 0 ? <MainPage /> : <ConsumerPage />} */}
      </div>
    </>
  );
};

export default App;
