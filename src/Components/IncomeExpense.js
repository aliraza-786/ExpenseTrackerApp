import React, { useState, useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'center',
    margin:'auto',
    '& > *': {
      margin: theme.spacing(0),
      width: theme.spacing('18'),
      height: theme.spacing('auto'),
      padding: '10px',
    },
  },
}));

export default function IncomeExpense() {
  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item),0).toFixed(2);
  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item),0) * 1 ).toFixed(2);

  const classes = useStyles();

  return (
      <div className={classes.root}>
      <Paper elevation={2}>
        <h3>Income <br/>${income}</h3>
      </Paper>
      <Paper elevation={2}>
        <h3>Expense <br/>${expense}</h3>
      </Paper>
      </div>
  );
}
