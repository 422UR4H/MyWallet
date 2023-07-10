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

    function handleChange({ target }) {
        setForm({ ...form, [target.name]: target.value });
    }

    return (
        <SignTemplate
            textButton="Cadastrar"
            textLink="Já tem uma conta? Entre agora!"
            routeLink="/"
            onSubmit={handleSubmit}
            dataTestButton="sign-up-submit"
        >
            <input
                name="name"
                type="text"
                placeholder="Nome"
                value={form.name}
                onChange={handleChange}
                required
                data-test="name"
            />
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
            <input
                name="confirm"
                type="password"
                placeholder="Confirme a senha"
                value={form.confirm}
                onChange={handleChange}
                required
                data-test="conf-password"
            />
        </SignTemplate>
    );
}