import React, { Fragment } from 'react';
import { PageHeader } from './PageHeader';
import { ExpenseTableView } from './ExpenseTableView';
import { PageSection } from './PageSection';

export const ExpensePage = () => {
  return (
    <Fragment>
      <PageHeader>
        <h1 className="title">Expense Configuration</h1>
      </PageHeader>
      <PageSection>
        <ExpenseTableView />
      </PageSection>
    </Fragment>
  );
};
