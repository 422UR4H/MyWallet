import { useEffect } from "react";
import axios from "axios";
import SignTemplate from "../components/templates/SignTemplate.jsx";


export default function SigninPage() {

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/`)
            .then((res) => {
            
            })
            .catch((err) => {
                
            });
    }, []);

    return (
        <SignTemplate textButton="Entrar" textLink="Primeira vez? Cadastre-se!">
            <input type="email" placeholder="E-mail" required />
            <input type="password" placeholder="Senha" required />
        </SignTemplate>
    );
}