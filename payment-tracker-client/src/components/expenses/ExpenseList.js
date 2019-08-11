import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core';
import ExpenseItem from './ExpenseItem';
import ExpenseEditor from './ExpenseEditor';

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

const ExpenseList = ({ items, onSave }) => {
  const classes = useStyles();
  const [isDialogOpen, setDialog] = React.useState(false);
  const [openedExpense, openExpense] = React.useState(null);

  const onRowClick = (e, id) => {
    const expense = items.find(x => x.id === id);
    openExpense(expense);
    setDialog(true);
  };

  const saveWithClose = expense => {
    onSave(expense);
    closeModal();
  };

  const closeModal = () => {
    setDialog(false);
    openExpense(null);
  };

  return (
    <div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(expense => (
            <ExpenseItem
              key={expense.id}
              {...expense}
              onRowClick={onRowClick}
            />
          ))}
        </TableBody>
      </Table>
      <ExpenseEditor
        open={isDialogOpen}
        item={openedExpense}
        onSave={saveWithClose}
        onCancel={closeModal}
      />
    </div>
  );
};

export default ExpenseList;
