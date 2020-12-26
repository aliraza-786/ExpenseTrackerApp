import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export default function Balance() {
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    // console.log("amounts ", amounts);
    const total = amounts.reduce((acc, item) => (acc +=item), 0).toFixed(2);;
    
    const styles= {
      color:'#070500'
    }
  return (
    <div>
        <h1>Expense Tracker App</h1>
        <h3>Current Balance</h3>
        <h1 style={styles}>${total}</h1>
    </div>
  );
}
