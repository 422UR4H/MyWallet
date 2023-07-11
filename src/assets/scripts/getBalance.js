export default function getBalance(transactions) {
    const initValue = 0;

    return transactions?.reduce((sum, t) => {
        return t.type === "entrada" ? sum + t.amount : sum - t.amount
    }, initValue) ?? initValue;
}