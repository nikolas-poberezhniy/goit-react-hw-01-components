import { TransactionBody, TransactionBodyCell, TransactionHead, TransactionHeadCell, TransactionTable } from "./Transactions.styled";
import PropTypes from 'prop-types'

export const Transactions = ({ transactions }) => {

    return (
        <TransactionTable>
            <TransactionHead>
                <tr>
                    <TransactionHeadCell>Type</TransactionHeadCell>
                    <TransactionHeadCell>Amount</TransactionHeadCell>
                    <TransactionHeadCell>Currency</TransactionHeadCell>
                </tr>
            </TransactionHead>
            <TransactionBody>
                {transactions.map(({ id, type, amount, currency }) => {
                    return (<tr key={id}>
                                <TransactionBodyCell>{type}</TransactionBodyCell>
                                <TransactionBodyCell>{amount}</TransactionBodyCell>
                                <TransactionBodyCell>{currency}</TransactionBodyCell>
                            </tr>
                )})}
            </TransactionBody>
        </TransactionTable>
    )
}   


Transactions.prototype = {
    transactions: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
}  