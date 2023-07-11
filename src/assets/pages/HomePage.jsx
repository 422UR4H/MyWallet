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

    useEffect(() => {
        if (!token) {
            navigate("/");
        } else {
            api.getTransactions(token)
                .then((res) => {
                    setTransactions(res.data);

                    api.getUser(token)
                        .then((resUser) => setName(resUser.data.name))
                        .catch((err) => handleApiError(err));
                })
                .catch((err) => {
                    handleApiError(err);
                });
        }
    }, []);

    return (
        <MainTemplate textHeader={`Olá, ${name}`} dataTest="user-name">
            <LogoutButton />
            <TransactionsTable transactions={transactions} />
            <div className="container-buttons">
                <TransactionButton type="entrada" dataTest="new-income" />
                <TransactionButton type="saida" dataTest="new-expense" />
            </div>
        </MainTemplate>
    );
}