import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ExpenseItem from './ExpenseItem';

export const expenseItem = {
  id: '1',
  title: 'Test Task'
};

export const actions = {
  onPinItem: action('onPinTask')
};

storiesOf('Task', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('default', () => <ExpenseItem {...expenseItem} {...actions} />);
