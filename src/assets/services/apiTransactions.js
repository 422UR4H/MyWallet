import axios from "axios";
import config from "./configToken.js"

export function getTransactions(token) {
    return axios.post(`${import.meta.env.VITE_API_URL}/transactions`, config(token));
}

const apiTransactions = { getTransactions };
export default apiTransactions;