import React from "react";
import Card from "../../../components/Card";
import styles from "./BillReport.module.css";
import arrow from "../../../assets/arrow-down.svg";
import ArrowLink from "../../../components/ArrowLink";

import { useState, useEffect } from "react";
import TransactionAPI from "../../../api/transaction";

const BillReport = ({ txns = [] }) => {
	let rows = [];

	txns.map((txn) => {
		rows.push(
			<div key={txn._id} className={styles.card}>
				<div className={styles["consumer-card"]}>
					<div className={styles.divider}></div>
					<div className={styles["consumer-detail"]}>
						<span className={styles["main-title"]}>{txn.consumerDetail}</span>
						<span className={styles["sub-title"]}>{txn.invoiceNumber}</span>
					</div>
					<span className={styles.price}>&#8377;{txn.totalAmount}</span>
					<div className={styles["details-date"]}>
						<div className={styles["date-time"]}>12:00 pm, 21st Feb 2023</div>
						<div className={styles["detail-row"]}></div>
						<ArrowLink name="View Details" />
					</div>
				</div>
			</div>
		);
	});

	return (
		<Card dark={true}>
			<div className={styles["title-bar"]}>
				<div className={styles.title}>Bill Report</div>
				<ArrowLink name="View all" />
			</div>
			<div className={styles.wrapper}>{rows}</div>
		</Card>
	);
};

export default BillReport;
