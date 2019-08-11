import React from 'react';
import { storiesOf } from '@storybook/react';

import ExpenseList from './ExpenseList';
import { actions } from './ExpenseItem.stories';

export const expenseItems = [
  {
    id: '1',
    title: 'Sample Expense Item 1',
    type: 'Monthly'
  },
  {
    id: '2',
    title: 'Sample Expense Item 2',
    type: 'Monthly'
  },
  {
    id: '3',
    title: 'Sample Expense Item 3',
    type: 'Monthly'
  },
  {
    id: '4',
    title: 'Sample Expense Item 4',
    type: 'Monthly'
  }
];

storiesOf('Expense List', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()} </div>)
  .add('default', () => <ExpenseList items={expenseItems} {...actions} />);
