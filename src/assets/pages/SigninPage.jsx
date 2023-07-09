import { useEffect, useState } from "react";
import SignTemplate from "../components/templates/SignTemplate.jsx";
import { useNavigate } from "react-router-dom";
import handleApiError from "../scripts/handleApiError.js";
import signIn from "../scripts/signIn.js";

export default function SigninPage({ token, setToken }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const err = signIn(email, password, setToken, navigate);
        if (err) handleApiError(err);
    }

    useEffect(() => {
        if (token) {
            const err = signIn(email, password, setToken, navigate);
            if (err) alert("Faça login para continuar");
        }
    }, []);

    return (
        <SignTemplate
            textButton="Entrar"
            textLink="Primeira vez? Cadastre-se!"
            routeLink="/cadastro"
            onSubmit={handleSubmit}>

            <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                required />
            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                required />

        </SignTemplate>
    );
}