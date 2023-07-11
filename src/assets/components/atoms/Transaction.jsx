import styled from "styled-components";
import useToken from "../../hooks/useToken.js";
import handleType from "../../scripts/handleType.js"
import api from "../../services/api.js"
import { useNavigate } from "react-router-dom";
import handleApiError from "../../scripts/handleApiError.js";

export default function Transaction({ _id, type, text, amount, time, updateTrans }) {
    const navigate = useNavigate();
    const { token } = useToken();

    function handleClick() {
        if (confirm(`Deseja apagar essa ${handleType(type)}?`)) {
            api.deleteTransaction(_id, token)
                .then(() => {
                    updateTrans(token);
                })
                .catch((err) => handleApiError(err));
        }
    }

    return (
        <StyledTransaction type={type}>
            <div>
                <span className="time">{time}</span>
                <span className="text" data-test="registry-name">{text}</span>
            </div>
            <div>
                <span className="amount" data-test="registry-amount">
                    {amount.toFixed(2).replace('.', ',')}
                </span>
                <button onClick={handleClick}>X</button>
            </div>
        </StyledTransaction>
    )
}

const StyledTransaction = styled.div`
    margin-block: 23px;

    display: flex;
    justify-content: space-between;

    button {
        background-color: inherit;
        color: #C6C6C6;
        text-align: center;
        margin-left: 12px;
        border: none;
    }

    span {
        font-family: 'Raleway';
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
    }

    .time {
        color: #C6C6C6;
    }

    .text {
        color: black;
        margin-left: 12px;
    }

    .amount {
        color: ${({ type }) => type === "entrada" ? "#03AC00" : "#C70000"};
    }
`;