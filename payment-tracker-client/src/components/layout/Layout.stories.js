import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Layout from './Layout';
import { expenseItems } from '../expenses/ExpenseList.stories';
import ExpensesPage from '../ExpensesPage';
import MonthlyViewPage from '../MonthlyViewPage';
import {
  paidItem,
  notPaidItem,
  naItem
} from '../monthly-view/MonthlyViewItem.stories';

export const actions = {
  onDateChanged: action('onDateChanged'),
  onSave: action('onSave')
};

storiesOf('Layout', module)
  .add('first visit', () => (
    <Layout
      monthlyViewPage={
        <MonthlyViewPage
          monthlyViewItems={[]}
          onSave={actions.onSave}
          onDateChanged={actions.onDateChanged}
        />
      }
      expensesPage={<ExpensesPage expenses={[]} onSave={actions.onSave} />}
      initials="DV"
    />
  ))
  .add('with data', () => (
    <Layout
      monthlyViewPage={
        <MonthlyViewPage
          monthlyViewItems={[paidItem, notPaidItem, naItem]}
          onSave={actions.onSave}
          onDateChanged={actions.onDateChanged}
        />
      }
      expensesPage={
        <ExpensesPage expenses={expenseItems} onSave={actions.onSave} />
      }
      initials="DV"
    />
  ))
  .add('loading', () => (
    <Layout
      monthlyViewPage={
        <MonthlyViewPage
          isLoading
          monthlyViewItems={[]}
          onSave={actions.onSave}
          onDateChanged={actions.onDateChanged}
        />
      }
      expensesPage={
        <ExpensesPage isLoading expenses={[]} onSave={actions.onSave} />
      }
      initials="DV"
    />
  ));
