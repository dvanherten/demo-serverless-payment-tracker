import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ExpenseList from './ExpenseList';
import { actions as rowActions } from './ExpenseItem.stories';

export const expenseItems = [
  {
    id: '1',
    name: 'Sample Expense Item 1',
    type: 'Monthly'
  },
  {
    id: '2',
    name: 'Sample Expense Item 2',
    type: 'Monthly'
  },
  {
    id: '3',
    name: 'Sample Expense Item 3',
    type: 'Monthly'
  },
  {
    id: '4',
    name: 'Sample Expense Item 4',
    type: 'Monthly'
  }
];

export const actions = {
  ...rowActions,
  onSave: action('onSave')
};

storiesOf('Expense List', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()} </div>)
  .add('default', () => <ExpenseList items={expenseItems} {...actions} />)
  .add('loading', () => <ExpenseList isLoading items={[]} {...actions} />);
