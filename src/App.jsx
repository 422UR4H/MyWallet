import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninPage from "./assets/pages/SigninPage.jsx";
import SignupPage from "./assets/pages/SignupPage.jsx";
import HomePage from "./assets/pages/HomePage.jsx";
import NewTransactionPage from "./assets/pages/NewTransactionPage.jsx";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SigninPage />} />
                <Route path="/cadastro" element={<SignupPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/nova-transacao/:tipo" element={<NewTransactionPage />} />
            </Routes>
        </BrowserRouter>
    );
}