import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../contexts/TokenContext.js";
import { useNavigate } from "react-router-dom";
import { signIn } from "../services/apiAuth.js";
import SignTemplate from "../components/templates/SignTemplate.jsx";
import handleApiError from "../scripts/handleApiError.js";


export default function SigninPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });
    const { token, setToken } = useContext(TokenContext);

    function handleForm({ target }) {
        setForm({ ...form, [target.name]: target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        signIn(form)
            .then(({ data }) => {
                localStorage.setItem("token", data.token);
                setToken(data.token);
                navigate("/home");
            })
            .catch((err) => {
                handleApiError(err);
            });
    }

    // useEffect(() => {
    //     if (token) {
    //         // aqui outra requisição deve ser feita na verdade. não a de login
    //         signIn(form)
    //             .then(() => {
    //                 navigate("/home");
    //             })
    //             .catch((err) => {
    //                 console.log(err.response.data);
    //                 alert("Faça login para continuar");
    //             });
    //     }
    // }, []);

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