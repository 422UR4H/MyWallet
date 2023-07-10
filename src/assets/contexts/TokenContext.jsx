import { createContext, useState } from "react";

const TokenContext = createContext('');

export function TokenProvider({ children }) {
    const lsToken = JSON.parse(localStorage.getItem("token"));
    const [token, setToken] = useState(lsToken);

    function login(token) {
        setToken(token);
        localStorage.setItem("token", JSON.stringify(token));
    }
    // useEffect(() => {
    //     const lsToken = localStorage.getItem("token");
        // const navigate = useNavigate();

    //     if (lsToken === null) {
    //         navigate("/");
    //     } else {
    //         setToken(lsToken);
    //         navigate("/home");
    //     }
    // }, []);

    return (
        <TokenContext.Provider value={{ token, login }}>
            {children}
        </TokenContext.Provider>
    );
}

export default TokenContext;