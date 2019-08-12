import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Table, TableBody } from '@material-ui/core';

import ExpenseItem from './ExpenseItem';

export const expenseItem = {
  id: '1',
  name: 'Sample Expense Item'
};

export const actions = {
  onRowClick: action('onRowClick')
};

storiesOf('Expense Row', module)
  .addDecorator(story => (
    <div style={{ padding: '3rem' }}>
      <Table>
        <TableBody>{story()}</TableBody>
      </Table>
    </div>
  ))
  .add('default', () => <ExpenseItem {...expenseItem} {...actions} />);
