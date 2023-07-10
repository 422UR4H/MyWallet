import { createContext, useState } from "react";

const TokenContext = createContext({});

export function TokenProvider({ children }) {
    const lsToken = JSON.parse(localStorage.getItem("token"));
    const [token, setToken] = useState(lsToken);

    function login(token) {
        setToken(token);
        localStorage.setItem("token", JSON.stringify(token));
    }

    function logout(token) {
        setToken(null);
        localStorage.removeItem("token");
    }

    return (
        <TokenContext.Provider value={{ token, login, logout }}>
            {children}
        </TokenContext.Provider>
    );
}

export default TokenContext;