import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

const ExpenseItem = ({ id, title, onRowClick }) => {
  return (
    <TableRow hover onClick={event => onRowClick(event, id)}>
      <TableCell>{title}</TableCell>
    </TableRow>
  );
};

export default ExpenseItem;
