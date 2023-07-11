import styled from "styled-components";
import Transaction from "../atoms/Transaction.jsx";
import { useEffect, useState } from "react";

export default function TransactionsTable({ transactions }) {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        setBalance(transactions?.reduce((sum, t) => {
            return t.type === "entrada" ? sum + t.amount : sum - t.amount
        }, 0));
    }, [transactions]);

    // function getBalance() {
    //     let sum = 0;
    //     transactions?.forEach(t => {
    //         if (t.type === "entrada") {
    //             sum += t.amount;
    //         } else {
    //             sum -= t.amount;
    //         }
    //     });
    //     return sum;
    // }

    return (
        <StyledTransTable $balance={balance}>
            {transactions.length > 0 ?
                <>
                    <div>
                        {transactions?.map(t => <Transaction key={t._id} {...t} />)}
                    </div>
                    <footer>
                        <span>SALDO </span>
                        <span className="balance" data-test="total-amount">
                            {balance.toFixed(2).replace('.', ',').replace('-', '')}
                        </span>
                    </footer>
                </>
                :
                <p>Não há registros de<br />entrada ou saída</p>
            }
        </StyledTransTable>
    )
}

const StyledTransTable = styled.div`
    background-color: white;
    height: 446px;
    padding: 10px;
    padding-bottom: 30px;
    border-radius: 5px;

    display: flex;
    flex-direction: column;

    position: relative;

    &>div {
        overflow-y: scroll;

        &::-webkit-scrollbar {
            width: 0;
        }
    }

    footer {
        background-color: inherit;
        border-radius: inherit;
        width: inherit;
        padding: 10px 10px 10px 15px;

        display: flex;
        justify-content: space-between;

        position: absolute;
        bottom: 0px;
        left: 0px;
        z-index: 1;

        span {
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
        }

        .balance {
            color: ${({ balance }) => balance > 0 ? "#03AC00" : "#C70000"};
            font-weight: 400;
        }
    }

    p {
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        text-align: center;
        color: #868686;
        margin-top: 200px;
    }
`;