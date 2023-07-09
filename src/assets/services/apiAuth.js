import axios from "axios";

function signIn(body) {
    return axios.post(`${import.meta.env.VITE_API_URL}/sign-in`, body)
}

function signUp(body) {
    return axios.post(`${import.meta.env.VITE_API_URL}/sign-up`, body)
}

function signOut(token) {
    return axios.post(`${import.meta.env.VITE_API_URL}/sign-out`, {
        headers: { "Authorization": `Bearer ${token}` }
    });
}

const apiAuth = { signIn, signUp };
export default apiAuth;