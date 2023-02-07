import axios from "axios";
import rootUrl from "./url";

async function createTransaction(_data, access_token) {
	try {
		const { data } = await axios.post(`${rootUrl}/api/transaction/`, _data, {
			headers: {
				Authorization: `Token ${access_token}`,
			},
		});
		return data;
	} catch (error) {
		return false;
	}
}

async function getAllTransactions(_data, access_token) {
	try {
		const { data } = await axios.post(`${rootUrl}/api/auth/transaction/all`, _data, {
			headers: {
				Authorization: `Token ${access_token}`,
			},
		});
		return data;
	} catch (error) {
		return false;
	}
}
async function getSeller(access_token) {
	try {
		const { data } = await axios.get(`${rootUrl}/api/seller`, {
			headers: {
				Authorization: `Token ${access_token}`,
			},
		});
		return data;
	} catch (error) {
		return false;
	}
}

export default { createTransaction, getAllTransactions, getSeller };
