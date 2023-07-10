import axios from "axios";
import config from "./configToken.js";

export function signIn(body) {
    return axios.post(`${import.meta.env.VITE_API_URL}/sign-in`, body);
}

export function signUp(body) {
    return axios.post(`${import.meta.env.VITE_API_URL}/sign-up`, body);
}

export function signOut(token) {
    return axios.post(`${import.meta.env.VITE_API_URL}/sign-out`, null, config(token));
}

export function getTransactions(token) {
    return axios.get(`${import.meta.env.VITE_API_URL}/transactions`, config(token));
}

export function postTransaction(type, body, token) {
    return axios.post(`${import.meta.env.VITE_API_URL}/transaction/${type}`, body, config(token));
}

export function getUser(token) {
    return axios.get(`${import.meta.env.VITE_API_URL}/user`, config(token));
}

const api = { signIn, signUp, signOut, getTransactions, postTransaction, getUser };
export default api;