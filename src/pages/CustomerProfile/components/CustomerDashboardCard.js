import React from "react";
import Card from "../../../components/Card";
import IncreaseCard from "../../../components/increase";
import styles from "./CustomerDashboardCard.module.css";
import ArrowLink from "../../../components/ArrowLink";

const CustomerDashboardCard = ({ totalCustomers }) => {
	return (
		<Card>
			<div className={styles["main-content"]}>
				<div>
					<div className={styles.title}>
						<span>Total Customer Count</span>
						<IncreaseCard increase={true} percent={8.9} />
					</div>
					<span className={styles["sub-title"]}>{totalCustomers}</span>
				</div>
				<div>
					<ArrowLink name="View customer dashboard" />
				</div>
			</div>
		</Card>
	);
};

export default CustomerDashboardCard;
