import axios from "axios";
import rootUrl from "./url";
async function authPOST(url, _data, access_token) {
	try {
		const { data } = await axios.post(`${rootUrl}${url}`, _data, {
			headers: {
				Authorization: `Token ${access_token}`,
			},
		});
		return data;
	} catch (error) {
		return false;
	}
}

async function authGET(url, access_token) {
	try {
		const { data } = await axios.get(`${rootUrl}${url}`, {
			headers: {
				Authorization: `Token ${access_token}`,
			},
		});
		return data;
	} catch (error) {
		return false;
	}
}

export default { authGET, authPOST };
