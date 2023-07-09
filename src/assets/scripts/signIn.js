import axios from "axios";
import handleApiError from "./handleApiError.js";

export default function signIn(email, password, setToken, navigate) {
    axios.post(`${import.meta.env.VITE_API_URL}/sign-in`, { email, password })
        .then(({ data }) => {
            setToken(data.token);
            navigate("/home");
        })
        .catch((err) => {
            return err; // será que posso?
        })
}