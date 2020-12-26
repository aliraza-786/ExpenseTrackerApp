import React, { useState, useReducer } from 'react';
import './App.css';
// import { initialState, reducer } from './reducer.js';

import IncomeExpense from "./Components/IncomeExpense";
import Balance from './Components/Balance';
import TransactionList from './Components/TransactionList';
import AddTrasaction from './Components/AddTrasaction';
import { GloablProvider } from "./context/GlobalState";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();

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



  // const [text, setText] = useState();
  // const [state, dispatch1] = useReducer(reducer, initialState);


  // const onSubmit = () => {
  //   // dispatch1({ type: "add-todo", text: text });
  //   dispatch1({ type: "add-income", data: text });
  // }
  // const inputEvent = (e) => {
  //   let inte = parseInt(e.target.value);
  //   // setText(e.target.value);
  //   setText(inte);
  // }
  // const deleteBtn = (id) => {
  //   alert("Delete Button " + id);
  //   dispatch1({ type: "delete-todo", id })
  // }
  // const [incomes, setIncomes] = useState();
  // const addIncome = () => {
  //   // if (text >= 0) {
  //     // dispatch1({ type: "add-income", data: text });
  //   // }
  //   // else {
  //   //   dispatch1({ type: "add-expense", data: text })
  //   // }

  //   var array = state.income;      
  //   // Getting sum of numbers
  //   var sum = array.reduce(function(a, b){
  //       return a + b;
  //   }, 0);
  //   setIncomes(sum);
  //   alert("sum Of Array " + sum);
  // }

  // return (
  //   <div className="App">
  //     <h1>Expense App</h1>
  //     {/* {
  //       state.todos.map((obj, id) => {
  //         return (
  //           <div key={id}>
  //             <h3>{obj.text}</h3>
  //             <button onClick={() => deleteBtn(id)}>Delete</button>
  //           </div>
  //         )
  //       })
  //     } */}
  //     <input type="number" placeholder="Detail of Transaction" name="text" onChange={inputEvent} /><br />
  //     <input type="number" placeholder="Dollar value of Transaction" name="amount" onChange={inputEvent} /><br />
  //     <button onClick={onSubmit}>Add Todo</button>
  //     <button onClick={addIncome}>Add Income</button>
  // </div>
  // );
}

export default App;