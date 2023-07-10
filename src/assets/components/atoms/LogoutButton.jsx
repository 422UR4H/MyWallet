import { useNavigate } from "react-router-dom";
import { signOut } from "../../services/api.js";
import useToken from "../../hooks/useToken.js";

export default function LogoutButton() {
    const navigate = useNavigate();
    const { token, logout } = useToken();

    function handleClick() {
        signOut(token)
            .then(() => {
                logout();
                navigate("/");
            })
            .catch((err) => {
                console.error(err);
                logout();
                navigate("/");
            })
    }

    return (
        <button onClick={handleClick} data-test="logout">EXIT</button>
    );
}