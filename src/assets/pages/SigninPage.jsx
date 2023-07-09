import { useEffect, useState } from "react";
import SignTemplate from "../components/templates/SignTemplate.jsx";
import { useNavigate } from "react-router-dom";
import handleApiError from "../scripts/handleApiError.js";
import { signIn } from "../services/apiAuth.js";

export default function SigninPage({ token, setToken }) {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" })

    function handleForm({ target }) {
        // this defines an object --> { string property: value }
        setForm({ ...form, [target.name]: target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        signIn(form)
            .then(({ data }) => {
                setToken(data.token);
                navigate("/home");
            })
            .catch((err) => {
                handleApiError(err);
            });
    }

    useEffect(() => {
        if (token) {
            // aqui outra requisição deve ser feita na verdade. não a de login
            signIn(form)
                .then(() => {
                    navigate("/home");
                })
                .catch((err) => {
                    console.log(err.response.data);
                    alert("Faça login para continuar");
                });
        }
    }, []);

    return (
        <SignTemplate
            textButton="Entrar"
            textLink="Primeira vez? Cadastre-se!"
            routeLink="/cadastro"
            onSubmit={handleSubmit}
        >
            <input
                name="email"
                type="email"
                placeholder="E-mail"
                value={form.email}
                onChange={handleForm}
                required
            />
            <input
                name="password"
                type="password"
                placeholder="Senha"
                value={form.password}
                onChange={handleForm}
                required
            />
        </SignTemplate>
    );
}