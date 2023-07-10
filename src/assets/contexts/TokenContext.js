import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const TokenContext = createContext('');

export default function TokenProvider({ children }) {
    const [token, setToken] = useState();

    useEffect(() => {
        const lsToken = localStorage.getItem("token");
        const navigate = useNavigate();

        if (lsToken === null) {
            navigate("/");
        } else {
            setToken(lsToken);
            navigate("/home");
        }
    }, []);

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            {children}
        </TokenContext.Provider>
    );
}