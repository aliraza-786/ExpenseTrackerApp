import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function AddTranction() {
  const classes = useStyles();

  const [text, setText] = useState();
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = (e) =>{
    e.preventDefault();

    const newTransaction = {
      id: new Date(),
      text: text,
      amount: parseInt(amount),
    }
    addTransaction(newTransaction);
  }
  const inputField = {
    width:'99%',
    padding:'3px'
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <TextField type="text" id="outlined-basic" label="Detail of Transaction" variant="outlined" 
        name="text" onChange={(e) => { setText(e.target.value) }} style={inputField}/>
        <TextField type="number" id="outlined-basic" label="Dollar value of Transaction" variant="outlined"
        name="amount" onChange={(e) => { setAmount(e.target.value) }} style={inputField}/>
        <Button type="submit" variant="outlined" color="primary" style={inputField}>
          Add Trasaction
        </Button>
      </form>
    </>
  );
}
