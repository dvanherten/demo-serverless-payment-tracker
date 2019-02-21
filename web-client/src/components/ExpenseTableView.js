import React, { Fragment } from 'react';

export const ExpenseTableView = ({ expenses }) => (
  <Fragment>
    <h1 className="title">Expenses</h1>
    <table className="table is-fullwidth">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(x => (
          <tr>
            <td>{x.id}</td>
            <td>{x.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </Fragment>
);
