import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableHead, TableCell } from '@material-ui/core';
import ExpenseItem from './ExpenseItem';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 'auto'
  }
}));

const ExpenseList = ({ items, onRowClick }) => {
  const classes = useStyles();

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableCell>Name</TableCell>
      </TableHead>
      {items.map(expense => (
        <ExpenseItem key={expense.id} {...expense} onRowClick={onRowClick} />
      ))}
    </Table>
  );
};

export default ExpenseList;
