import Transaction from "../atoms/Transaction.jsx";

export default function TransactionsTable({ transactions }) {
    function getBalance() {
        let sum = 0;
        transactions.forEach(t => sum += t.amount);
        return sum;
    }

    return (
        <>
            <div>
                {transactions.map(transaction => <Transaction {...transaction} />)}
            </div>
            <div>
                <h2>SALDO</h2><span className="balance">{getBalance()}</span>
            </div>
        </>
    )
}