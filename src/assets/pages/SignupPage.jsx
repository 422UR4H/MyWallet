import { Link } from "react-router-dom";
import axios from "axios";
import SignTemplate from "../components/templates/SignTemplate.jsx";


export default function SignupPage() {

    return (
        <SignTemplate textButton="Cadastrar" textLink="Já tem uma conta? Entre agora!">
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="E-mail" required />
            <input type="password" placeholder="Senha" required />
            <input type="password" placeholder="Confirme a senha" required />
        </SignTemplate>
    );
}