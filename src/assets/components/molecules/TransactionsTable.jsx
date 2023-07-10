import Transaction from "../atoms/Transaction.jsx";

export default function TransactionsTable({ transactions }) {
    function getBalance() {
        let sum = 0;
        transactions?.forEach(t => {
            if (t.type === "entrada") {
                sum += t.amount;
            } else {
                sum -= t.amount;
            }
        });
        return sum;
    }

    return (
        <>
            <div>
                {transactions?.map(t => <Transaction key={t._id} {...t} />)}
            </div>
            <div>
                <span>SALDO</span><span className="balance">{getBalance()}</span>
            </div>
        </>
    )
}