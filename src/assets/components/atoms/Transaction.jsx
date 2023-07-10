export default function Transaction({ type, text, amount, time }) {
    return (
        <>
            <span className="time">{time}</span>
            <span className="text">{text}</span>
            <span className="amount">{amount}</span>
        </>
    )
}