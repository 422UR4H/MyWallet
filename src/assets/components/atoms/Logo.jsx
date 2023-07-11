import styled from "styled-components";

export default function Logo() {
    return <StyledLogo>MyWallet</StyledLogo>;
}

const StyledLogo = styled.h1`
    font-family: 'Saira Stencil One', 'cursive';
    font-size: 32px;
    font-weight: 400;
    line-height: 50px;
    color: white;

    margin-bottom: 24px;
`;