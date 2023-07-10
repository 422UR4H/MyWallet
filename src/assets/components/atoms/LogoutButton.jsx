import { useNavigate } from "react-router-dom";
import { signOut } from "../../services/api.js";
import useToken from "../../hooks/useToken.js";

export default function LogoButton() {
    const navigate = useNavigate();
    const { token } = useToken();

    function handleClick() {
        signOut(token).catch((err) => console.err(err));
        localStorage.removeItem("token");
        navigate("/");
    }

    return (
        <button onClick={handleClick}></button>
    );
}