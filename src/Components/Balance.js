import transitions from '@material-ui/core/styles/transitions';
import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export default function Balance() {
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    // console.log("amounts ", amounts);
    const total = amounts.reduce((acc, item) => (acc +=item), 0).toFixed(2);;

  return (
    <div>
        <h1>Expense Tracker</h1>
        <h2>Current Balance</h2>
        <h2>${total}</h2>
    </div>
  );
}
