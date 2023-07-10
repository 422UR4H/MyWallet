import { useNavigate } from "react-router-dom"

export default function TransactionButton({ type }) {
    const navigate = useNavigate();

    function handleClick() {
        if (type === "entrada" || type === "saida") {
            navigate(`/nova-transacao/${type}`);
        } else {
            navigate("/error");
        }
    }
    return (
        <button onClick={handleClick}>
            {type === "entrada" ? "Nova entrada" : "Nova saída"}
        </button>
    )
}