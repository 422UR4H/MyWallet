import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/molecules/Form.jsx";
import api from "../services/api.js";
import useToken from "../hooks/useToken.js";
import handleType from "../scripts/handleType.js";
import handleApiError from "../scripts/handleApiError.js";
import Input from "../components/styles/Input.js";
import MainTemplate from "../components/templates/MainTemplate.jsx";


export default function NewTransactionPage() {
    const [form, setForm] = useState({ amount: "", text: "" });
    const { token } = useToken();
    const { tipo } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) navigate("/")
    }, []);

    function handleSubmit(e) {
        e.preventDefault();

        api.postTransaction(tipo, form, token)
            .then(() => navigate("/home"))
            .catch((err) => handleApiError(err));
    }

    function handleChange({ target }) {
        setForm({ ...form, [target.name]: target.value });
    }

    return (
        <MainTemplate textHeader={`Nova ${handleType(tipo)}`}>
            {/* <h1>Nova {handleType(tipo)}</h1> */}

            <Form
                textButton={`Salvar ${handleType(tipo)}`}
                onSubmit={handleSubmit}
                dataTestButton="registry-save"
            >
                <Input
                    name="amount"
                    type="number"
                    placeholder="Valor"
                    value={form.amount}
                    onChange={handleChange}
                    required
                    data-test="registry-amount-input"
                />
                <Input
                    name="text"
                    type="text"
                    placeholder="Descrição"
                    value={form.text}
                    onChange={handleChange}
                    required
                    data-test="registry-name-input"
                />
            </Form>
        </MainTemplate>
    );
}