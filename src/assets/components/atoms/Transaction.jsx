export default function Transaction({ type, text, amount, time }) {
    return (
        <div>
            <span className="time">{time}</span>
            <span className="text" data-test="registry-name">{text}</span>
            <span className="amount" data-test="registry-amount">
                {amount.toString().replace('.', ',')}
            </span>
        </div>
    )
}