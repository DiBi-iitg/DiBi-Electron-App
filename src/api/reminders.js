import axios from "axios";
import rootUrl from "./url.js";

async function getAllReminders(access_token) {
	try {
		const { data } = await axios.get(`${rootUrl}/api/reminders`, {
			headers: {
				Authorization: `Token ${access_token}`,
			},
		});
		return data;
	} catch (error) {
		console.log(error);
		return false;
	}
}

async function createReminder(_data, access_token) {
	try {
		const { data } = await axios.post(`${rootUrl}/api/auth/reminders`, _data, {
			headers: {
				Authorization: `Token ${access_token}`,
			},
		});
		return data;
	} catch (error) {
		return false;
	}
}

export default { getAllReminders, createReminder };
