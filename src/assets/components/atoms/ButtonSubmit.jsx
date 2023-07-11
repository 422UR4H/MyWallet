import { styled } from "styled-components";

export default function ButtonSubmit({ children, dataTestButton }) {
    return (
        <StyledButtonSubmit type="submit" data-test={dataTestButton}>
            {children}
        </StyledButtonSubmit>
    );
}

const StyledButtonSubmit = styled.button`
    background-color: #A328D6;
    color: white;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;

    width: 326px;
    height: 46px;
    border: none;
    border-radius: 5px;
    margin-bottom: 36px;
`;