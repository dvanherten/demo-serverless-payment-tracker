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

storiesOf('Layout', module)
  .add('first visit', () => (
    <Layout
      monthlyViewPage={
        <MonthlyViewPage onSave={actions.onSave}>Expenses Page</MonthlyViewPage>
      }
      expensesPage={
        <ExpensesPage expenses={[]} onSave={actions.onSave}>
          Expenses Page
        </ExpensesPage>
      }
      initials="DV"
    />
  ))
  .add('with data', () => (
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
  ))
  .add('loading', () => (
    <Layout
      monthlyViewPage={
        <MonthlyViewPage onSave={actions.onSave}>Expenses Page</MonthlyViewPage>
      }
      expensesPage={
        <ExpensesPage isLoading expenses={[]} onSave={actions.onSave}>
          Expenses Page
        </ExpensesPage>
      }
      initials="DV"
    />
  ));
