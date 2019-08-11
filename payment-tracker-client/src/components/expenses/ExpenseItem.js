import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

const ExpenseItem = ({ id, name, onRowClick }) => {
  return (
    <TableRow hover onClick={event => onRowClick(event, id)}>
      <TableCell>{name}</TableCell>
    </TableRow>
  );
};

export default ExpenseItem;
