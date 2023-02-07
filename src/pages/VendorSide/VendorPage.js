import styles from "./VendorPage.module.css";
import React from "react";
import TableCustom from "./components/TableCustom";

import BillReport from "../dashboard/components/BillReport";
const VendorPage = () => {
  return (
    <div className={styles.main}>
      {/* <TableCustomII status="Accepted"></TableCustomII> */}
      <TableCustom></TableCustom>
      <BillReport></BillReport>
    </div>
  );
};

export default VendorPage;
