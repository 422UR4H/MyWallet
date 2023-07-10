import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken.js";
import api from "../services/api.js";
import handleApiError from "../scripts/handleApiError.js";
import MainTemplate from "../components/templates/MainTemplate.jsx";
import LogoutButton from "../components/atoms/LogoutButton.jsx";
import TransactionsTable from "../components/molecules/TransactionsTable.jsx";
import TransactionButton from "../components/atoms/TransactionButton.jsx";


export default function HomePage() {
    const { token } = useToken();
    const { name, setName } = useState("");
    const { transactions, setTransactions } = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/");
        } else {
            api.getTransactions(token)
                .then((res) => {
                    setTransactions(res.data);
                })
                .catch((err) => {
                    handleApiError(err);
                });

            api.getUser(token)
                .then((res) => {
                    setName(res.data.name);
                })
                .catch((err) => {
                    console.err(err);
                    handleApiError(err);
                })
        }
    }, []);

    return (
        <MainTemplate text={`Olá, ${name}`}>
            <LogoutButton />
            <TransactionsTable />
            <div>
                <TransactionButton type="entrada" />
                <TransactionButton type="saida" />
            </div>
        </MainTemplate>
    );
}