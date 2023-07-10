import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken.js";
import api from "../services/api.js";
import handleApiError from "../scripts/handleApiError.js";

export default function HomePage() {
    const { token, setToken } = useToken();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/");
        } else {
            api.getTransactions(token)
                .then((res) => {
                    const { type, text, amount, time, userId } = res.data;
                    // validar se res.data está vazio ou se as variaveis existem
                })
                .catch((err) => {
                    console.log(err)
                    handleApiError(err);
                });
        }
    }, []);

    return (
        <>
            Home
        </>
    );
}