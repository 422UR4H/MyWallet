import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/molecules/Form.jsx";
import api from "../services/api.js";
import useToken from "../hooks/useToken.js";
import handleType from "../scripts/handleType.js";
import handleApiError from "../scripts/handleApiError.js";
import Input from "../components/styles/Input.js";
import MainTemplate from "../components/templates/MainTemplate.jsx";


export default function EditTransactionPage() {
    const [form, setForm] = useState({ amount: "", text: "" });
    const { tipo, id } = useParams();
    const { token } = useToken();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/");
        }
        else {
            console.log(token, id);
            api.getTransaction(id, token)
                .then(({ data }) => setForm({ amount: data.amount, text: data.text }))
                .catch((err) => handleApiError(err));
        }
    }, []);

    function handleSubmit(e) {
        e.preventDefault();

        api.editTransaction(tipo, id, token, form)
            .then(() => navigate("/home"))
            .catch((err) => handleApiError(err));
    }

    function handleChange({ target }) {
        setForm({ ...form, [target.name]: target.value });
    }

    return (
        <MainTemplate textHeader={`Editar ${handleType(tipo)}`}>
            {/* <h1>Nova {handleType(tipo)}</h1> */}

            <Form
                textButton={`Atualizar ${handleType(tipo)}`}
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