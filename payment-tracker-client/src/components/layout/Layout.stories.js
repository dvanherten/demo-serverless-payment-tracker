import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Layout from './Layout';
import { expenseItems } from '../expenses/ExpenseList.stories';
import ExpensesPage from '../ExpensesPage';
import MonthlyViewPage from '../MonthlyViewPage';

export const actions = {
  onSave: action('onSave')
};

storiesOf('Layout', module).add('withFakePages', () => (
  <Layout
    monthlyViewPage={
      <MonthlyViewPage onSave={actions.onSave}>Expenses Page</MonthlyViewPage>
    }
    expensesPage={
      <ExpensesPage expenses={expenseItems} onSave={actions.onSave}>
        Expenses Page
      </ExpensesPage>
    }
    initials="DV"
  />
));
