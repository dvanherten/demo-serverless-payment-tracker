import React from 'react';
import { TableRow, TableCell, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const ExpenseItem = ({ id, name, onRowClick }) => {
  return (
    <TableRow hover onClick={event => onRowClick(event, id)}>
      <TableCell>
        <Typography variant="body1">{name}</Typography>
      </TableCell>
    </TableRow>
  );
};

export const LoadingExpenseItem = () => {
  return (
    <TableRow>
      <TableCell>
        <Skeleton height={6} width="60%" />
      </TableCell>
    </TableRow>
  );
};

export default ExpenseItem;
