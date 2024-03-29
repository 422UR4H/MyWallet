import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninPage from "./assets/pages/SigninPage.jsx";
import SignupPage from "./assets/pages/SignupPage.jsx";
import HomePage from "./assets/pages/HomePage.jsx";
import NewTransactionPage from "./assets/pages/NewTransactionPage.jsx";
import ErrorPage from "./assets/pages/ErrorPage.jsx";
import { TokenProvider } from "./assets/contexts/TokenContext.jsx";
import EditTransactionPage from "./assets/pages/EditTransactionPage.jsx";


export default function App() {
    return (
        <TokenProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SigninPage />} />
                    <Route path="/cadastro" element={<SignupPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/nova-transacao/:tipo" element={<NewTransactionPage />} />
                    <Route path="/editar-registro/:tipo/:id" element={<EditTransactionPage />} />
                    <Route path="/*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </TokenProvider>
    );
}