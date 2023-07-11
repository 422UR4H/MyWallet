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
    const navigate = useNavigate();
    const { token } = useToken();
    const [name, setName] = useState("");
    const [transactions, setTransactions] = useState([]);

    console.log(name);
    useEffect(() => {
        async function handleEffect() {
            if (!token) {
                navigate("/");
            } else {
                try {
                    console.log(token)
                    const resTrans = await api.getTransactions(token);
                    setTransactions(resTrans.data);

                    const { name } = JSON.parse(localStorage.getItem("token"));
                    console.log(token, name);
                    setName(name);
                } catch (err) {
                    handleApiError(err);
                }
            }
        }
        handleEffect();
    }, []);

    async function updateTrans(token) {
        const resTrans = await api.getTransactions(token);
        setTransactions(resTrans.data);
    }

    return (
        <MainTemplate textHeader={`Olá, ${name}`} dataTest="user-name">
            <LogoutButton />
            <TransactionsTable transactions={transactions} updateTrans={updateTrans} />
            <div className="container-buttons">
                <TransactionButton type="entrada" dataTest="new-income" />
                <TransactionButton type="saida" dataTest="new-expense" />
            </div>
        </MainTemplate>
    );
}