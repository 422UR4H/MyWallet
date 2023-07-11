import { useNavigate } from "react-router-dom";
import handleType from "../../scripts/handleType.js";
import { styled } from "styled-components";

export default function TransactionButton({ type, dataTest }) {
    const navigate = useNavigate();

    function handleClick() {
        if (type === "entrada" || type === "saida") {
            navigate(`/nova-transacao/${type}`);
        } else {
            navigate("/error");
        }
    }

    return (
        <StyledTransButton onClick={handleClick} data-test={dataTest}>
            <span>X</span>
            <span>Nova<br />{handleType(type)}</span>
        </StyledTransButton>
    );
}

const StyledTransButton = styled.button`
    background-color: #A328D6;
    color: white;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    text-align: left;

    height: 114px;
    width: 155px;
    padding: 10px;
    border: none;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;