import { Link } from "react-router-dom";
import Logo from "../atoms/Logo.jsx";
import Form from "../molecules/Form.jsx";
import { styled } from "styled-components";

export default function SignTemplate({ children, textButton, textLink, routeLink, onSubmit, dataTestButton }) {
    return (
        <StyledSign>
            <Logo />
            <Form textButton={textButton} onSubmit={onSubmit} dataTestButton={dataTestButton}>{children}</Form>
            <StyledLink to={routeLink}>{textLink}</StyledLink>
        </StyledSign>
    );
}

const StyledSign = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledLink = styled(Link)`
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    color: white;
`;