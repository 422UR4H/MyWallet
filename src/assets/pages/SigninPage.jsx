import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignTemplate from "../components/templates/SignTemplate.jsx";
import handleApiError from "../scripts/handleApiError.js";
import useToken from "../hooks/useToken.js";
import api from "../services/api.js";


export default function SigninPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });
    const { token, login } = useToken();

    useEffect(() => {
        if (token) {
            console.log("token " + token)
            navigate("/home");
        }
    }, []);

    function handleChange({ target }) {
        setForm({ ...form, [target.name]: target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        api.signIn(form)
            .then(({ data }) => {
                login(data);
                navigate("/home");
            })
            .catch((err) => {
                handleApiError(err);
            });
    }

    return (
        <SignTemplate
            textButton="Entrar"
            textLink="Primeira vez? Cadastre-se!"
            routeLink="/cadastro"
            onSubmit={handleSubmit}
            dataTestButton="sign-in-submit"
        >
            <input
                name="email"
                type="email"
                placeholder="E-mail"
                value={form.email}
                onChange={handleChange}
                required
                data-test="email"
            />
            <input
                name="password"
                type="password"
                placeholder="Senha"
                value={form.password}
                onChange={handleChange}
                required
                data-test="password"
            />
        </SignTemplate>
    );
}