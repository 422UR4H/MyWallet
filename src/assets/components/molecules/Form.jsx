import { styled } from "styled-components";
import ButtonSubmit from "../atoms/ButtonSubmit.jsx";

export default function Form({ children, textButton, onSubmit, dataTestButton }) {
    return (
        <StyledForm onSubmit={onSubmit}>
            {children}
            <ButtonSubmit dataTestButton={dataTestButton}>{textButton}</ButtonSubmit>
        </StyledForm>
    );
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;