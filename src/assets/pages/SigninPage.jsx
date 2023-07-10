import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../services/apiAuth.js";
import SignTemplate from "../components/templates/SignTemplate.jsx";
import handleApiError from "../scripts/handleApiError.js";
import useToken from "../hooks/useToken.js";


export default function SigninPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });
    const { token, login } = useToken();

    useEffect(() => {
        if (token) {
            // aqui outra requisição deve ser feita na verdade. não a de login
            // signIn(form)
            //     .then(() => {
                    navigate("/home");
                // })
                // .catch((err) => {
                //     console.log(err.response.data);
                //     alert("Faça login para continuar");
                // });
        }
    }, []);

    function handleChange({ target }) {
        setForm({ ...form, [target.name]: target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        signIn(form)
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
        >
            <input
                name="email"
                type="email"
                placeholder="E-mail"
                value={form.email}
                onChange={handleChange}
                required
            />
            <input
                name="password"
                type="password"
                placeholder="Senha"
                value={form.password}
                onChange={handleChange}
                required
            />
        </SignTemplate>
    );
}