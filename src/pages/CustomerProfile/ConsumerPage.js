import React from "react";
import styles from "./ConsumerPage.module.css";
import Card from "../../components/Card";
import Donut from "../../components/Donut";
import TotalFinancials from "./components/TotalFinancials";
import CustomerDashboardCard from "./components/CustomerDashboardCard";
import Reminders from "../Dashboard/components/Reminders";
import BillReport from "../Dashboard/components/BillReport";
import { useState, useEffect } from "react";
import TransactionAPI from "../../api/transaction";


const ConsumerPage = () => {
	let fetchedTxns = [];
	const [txns, setTxns] = useState([]);
	const [netAmtSold, setNetAmtSold] = useState(2075500);
	const [totalCustomers, setTotalCustomers] = useState(870);
	const [nT, setNT] = useState(-2);
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);
	const [c, setC] = useState(0);
	const [d, setD] = useState(0);
	const [total, setTotal] = useState(0);

	const [refresh, setRefresh] = useState([]);

	useState(() => {
		setRefresh(refresh + 1);
	}, []);

	useEffect(() => {
		console.log(a, b, c, d);
		console.log(total);
	}, [a, b, c, d]);

	setTimeout(() => {
		setRefresh(refresh + 1);
	}, 2000);

	useEffect(() => {
		async function getTxns(data, access_token) {
			const allTxns = await TransactionAPI.getAllTransactions(data, access_token);
			if (allTxns) {
				console.log(allTxns);
				allTxns.txns.map((txn) => {
					if (allTxns.txns.length !== nT) {
						if (txn.category === "electronics") {
							setA((a) => a + 1);
							setTotal((total) => total + 1);
						} else if (txn.category === "grocery") {
							setB((b) => b + 1);
							setTotal((total) => total + 1);
						} else if (txn.category === "accessories") {
							setC((c) => c + 1);
							setTotal((total) => total + 1);
						} else {
							setD((d) => d + 1);
							setTotal((total) => total + 1);
						}
						setNetAmtSold(netAmtSold + parseFloat(txn.totalAmount));
						setTotalCustomers(totalCustomers + 1);
					}
				});
				setTxns(allTxns.txns);
				setNT(allTxns.txns.length);
			}
		}
		getTxns(
			{ vendorId: "2345" },
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjNkZDM2NGExNDIzOTA5MDQ2YTVmYTUwIiwiaWF0IjoxNjc1NzY5MDA0LCJleHAiOjE2NzU3NzYyMDR9.UnSXw6CthNAINhHgZxLADARI9MI8Ah5ovey2AyklCu8"
		);
	}, [refresh]);

	return (
		<div className={styles["cp-grid"]}>
			<div className={styles.e1}>
				<Card dark={true}>
					<div className={styles.e2}>
						<TotalFinancials netAmtSold={netAmtSold} />
					</div>
				</Card>
			</div>
			<div className={styles.e3}>
				<CustomerDashboardCard totalCustomers={totalCustomers} />
			</div>

			<div className={styles.e4}>
				<Donut
					a={(a / total) * 100}
					b={(b / total) * 100}
					c={(c / total) * 100}
					d={(d / total) * 100}
					consumer={true}
				/>
			</div>
			<div className={styles.e5}>
				<BillReport txns={txns} />
			</div>
			<div className={styles.e6}>
				<Reminders />
			</div>
		</div>
	);
};
export default ConsumerPage;
