import axios from "axios";

function signIn(body) {
    return axios.post(`${import.meta.env.VITE_API_URL}/sign-in`, body)
}

function signUp(password, confirm, email, name) {
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

const apiAuth = { signIn, signUp };
export default apiAuth;