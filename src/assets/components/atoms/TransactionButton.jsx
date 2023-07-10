import { useNavigate } from "react-router-dom";
import handleType from "../../scripts/handleType.js";

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
        <button onClick={handleClick} data-test={dataTest}>
            Nova {handleType(type)}
        </button>
    )
}