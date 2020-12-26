import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(0),
      width: theme.spacing('48'),
      height: theme.spacing('auto'),
    },
  },
}));


export default function Trasaction({ transaction }) {

  const { deleteTransaction } = useContext(GlobalContext);
  const classes = useStyles();

  return (
    <>
      <div className={classes.root} style={{float:'left'}} >
        <Paper elevation={3} >
          <b><span style={{float:'left', marginLeft:'5px'}}>{transaction.text} </span>
          <span style={{float:'right', marginRight:'5px'}}>${transaction.amount}</span></b>
        </Paper>

      </div>
      <div>
      <CancelOutlinedIcon onClick={() => deleteTransaction(transaction.id)}/>
      </div>
    </>
  );
}
