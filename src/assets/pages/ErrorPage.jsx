import { styled } from "styled-components";
import MainTemplate from "../components/templates/MainTemplate.jsx";

export default function ErrorPage() {
    return (
        <MainTemplate textHeader="Error 404">
            <StyledErrorPage>
                Página não encontrada
            </StyledErrorPage>
        </MainTemplate>
    );
}

const StyledErrorPage = styled.h2`
    color: white;
    font-size: 20px;
`;