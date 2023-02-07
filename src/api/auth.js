import axios from "axios";
import rootUrl from "./url";

async function createUser(_data) {
	try {
		const { data } = await axios.post(`${rootUrl}/api/auth/`, _data);
		return data;
	} catch (error) {
		return false;
	}
}

async function verifyUser(_data) {
	try {
		const { data } = await axios.post(`${rootUrl}/api/auth/verify`, _data);
		return data;
	} catch (error) {
		return false;
	}
}

async function loginUser(_data) {
	try {
		const { data } = await axios.post(`${rootUrl}/api/auth/login`, _data);
		return data;
	} catch (error) {
		return false;
	}
}

async function createSeller(_data) {
	try {
		const { data } = await axios.post(`${rootUrl}/api/auth/seller`, _data);
		return data;
	} catch (error) {
		return false;
	}
}

async function verifySeller(_data) {
	try {
		const { data } = await axios.post(`${rootUrl}/api/auth/seller/verify`, _data);
		return data;
	} catch (error) {
		return false;
	}
}

async function loginSeller(_data) {
	try {
		const { data } = await axios.post(`${rootUrl}/api/auth/seller/login`, _data);
		return data;
	} catch (error) {
		return false;
	}
}

export default { createUser, verifyUser, loginUser, createSeller, verifySeller, loginSeller };
