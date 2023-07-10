import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignTemplate from "../components/templates/SignTemplate.jsx";
import handleApiError from "../scripts/handleApiError.js";


export default function SignupPage() {
    const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (form.password !== form.confirm) {
            alert("as senhas não conferem!");
        } else {
            const { name, email, password } = form;
            signUp({ name, email, password })
                .then(() => {
                    alert("Cadastro realizado com sucesso!");
                    navigate("/");
                })
                .catch((err) => handleApiError(err));
        }
    }

    function handleForm({ target }) {
        setForm({ ...form, [target.name]: target.value });
    }

    return (
        <SignTemplate
            textButton="Cadastrar"
            textLink="Já tem uma conta? Entre agora!"
            routeLink="/"
            onSubmit={handleSubmit}>

            <input
                name="name"
                type="text"
                placeholder="Nome"
                value={form.name}
                onChange={handleForm}
                required />
            <input
                name="email"
                type="email"
                placeholder="E-mail"
                value={form.email}
                onChange={handleForm}
                required />
            <input
                name="password"
                type="password"
                placeholder="Senha"
                value={form.password}
                onChange={handleForm}
                required />
            <input
                name="confirm"
                type="password"
                placeholder="Confirme a senha"
                value={form.confirm}
                onChange={handleForm}
                required />

        </SignTemplate>
    );
}