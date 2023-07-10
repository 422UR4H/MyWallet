import axios from "axios";
import config from "./configToken.js";

export function signIn(body) {
    return axios.post(`${import.meta.env.VITE_API_URL}/sign-in`, body);
}

export function signUp(body) {
    return axios.post(`${import.meta.env.VITE_API_URL}/sign-up`, body);
}

export function signOut(token) {
    return axios.post(`${import.meta.env.VITE_API_URL}/sign-out`, config(token));
}

// const apiAuth = { signIn, signUp, signOut };
// export default apiAuth;