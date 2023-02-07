import React from "react";
import styles from "./ConsumerDetails.module.css";
import Card from '../../../components/Card'
import Collapsible from "react-collapsible";

const ConsumerDetails = () => {
  let rows = [];

  for (let i = 0; i < 100; i++) {
    rows.push(
      <Collapsible trigger="Start here">
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
      </Collapsible>
    );
  }

  return (
    <Card dark={true}>
      <div className={styles.title}>Consumer Details</div>
      <div className={styles.container}>
        <div className={styles.reminders}>{rows}</div>
      </div>
    </Card>
  );
};

export default ConsumerDetails;
