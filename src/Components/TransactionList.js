import transitions from '@material-ui/core/styles/transitions';
import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import Transaction from '../Components/Transaction';

export default function TransactionList() {
  const {transactions} = useContext(GlobalContext);
  // console.log("Context ", context);

  const border = {
    borderBottom:'3px solid lightgray',
    padding: '10px',
  }

  return (
    <>
    <h3 style={border}>Transaction History</h3>
    <ul>
      {
        transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction}/>
        ))
      }

    </ul>
    <h3 style={border}>Add New Transaction</h3>
    </>
  );
}
