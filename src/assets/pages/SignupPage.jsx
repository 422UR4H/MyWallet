import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SignTemplate from "../components/templates/SignTemplate.jsx";
import handleApiError from "../scripts/handleApiError.js";


export default function SignupPage() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    function signUp(e) {
        e.preventDefault();

        if (password !== confirm) {
            alert("As senhas não conferem!");
        } else {
            axios.post(`${import.meta.env.VITE_API_URL}/sign-up`, { name, email, password })
                .then(() => {
                    alert("Cadastro realizado com sucesso!")
                    navigate("/");
                })
                .catch((err) => handleApiError(err));
        }
    }

    return (
        <SignTemplate
            textButton="Cadastrar"
            textLink="Já tem uma conta? Entre agora!"
            routeLink="/"
            onSubmit={signUp}>

            <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={({ target }) => setName(target.value)}
                required />
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
            <input
                type="password"
                placeholder="Confirme a senha"
                value={confirm}
                onChange={({ target }) => setConfirm(target.value)}
                required />

        </SignTemplate>
    );
}