import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Table } from '@material-ui/core';

import ExpenseEditor from './ExpenseEditor';

export const expenseItem = {
  id: '1',
  name: 'Sample Expense Item'
};

export const actions = {
  onSave: action('onSave'),
  onCancel: action('onCancel')
};

storiesOf('Expense Editor', module)
  .addDecorator(story => (
    <div style={{ padding: '3rem' }}>
      <Table>{story()}</Table>
    </div>
  ))
  .add('add new', () => <ExpenseEditor open={true} {...actions} />)
  .add('edit existing', () => (
    <ExpenseEditor open={true} item={expenseItem} {...actions} />
  ));
