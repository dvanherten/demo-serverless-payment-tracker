import React from 'react';
import PageHeader from './PageHeader';
import ExpenseList from './expenses/ExpenseList';

const ExpensesPage = ({ expenses, onSave }) => {
  return (
    <React.Fragment>
      <PageHeader headerText="Expenses" />
      <ExpenseList items={expenses} onSave={onSave} />
    </React.Fragment>
  );
};

export default ExpensesPage;
