import { useNavigate } from "react-router-dom";
import { signOut } from "../../services/api.js";
import useToken from "../../hooks/useToken.js";
import exitImg from "../../images/exit.png";
import styled from "styled-components";

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
        <StyledLogoutButton onClick={handleClick} data-test="logout">
            <img src={exitImg} alt="EXIT" />
        </StyledLogoutButton>
    );
}

const StyledLogoutButton = styled.button`
    color: white;
    border: none;
    background-color: inherit;

    position: fixed;
    top: 28px;
    right: 24px;
`;