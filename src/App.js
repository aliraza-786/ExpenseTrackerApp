import React from 'react';
import './App.css';
import IncomeExpense from "./Components/IncomeExpense";
import Balance from './Components/Balance';
import TransactionList from './Components/TransactionList';
import AddTrasaction from './Components/AddTrasaction';
import { GloablProvider } from "./context/GlobalState";
import Grid from '@material-ui/core/Grid';


function App() {

  return (
    <Grid container spacing={0}>
      <Grid item xs>
      </Grid>
      <Grid item xs>
        <div style={{ textAlign: 'center' }} >
          <GloablProvider>
            <Balance />
            <IncomeExpense />
            <TransactionList />
            <AddTrasaction />
          </GloablProvider>
        </div>
      </Grid>
      <Grid item xs>
      </Grid>
    </Grid>
  )
}

export default App;