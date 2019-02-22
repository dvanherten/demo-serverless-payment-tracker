import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchExpenses } from '../redux/actions/expenses';

export const ExpenseTable = ({ expenses, fetchExpenses }) => {
  useEffect(() => {
    fetchExpenses();
  }, 0);

  return (
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
            <ExpenseTableRow key={x.id} id={x.id} name={x.name} />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

ExpenseTable.propTypes = {
  expenses: PropTypes.array
};

export const ExpenseTableRow = ({ id, name }) => (
  <tr>
    <td>{id}</td>
    <td>{name}</td>
  </tr>
);

ExpenseTableRow.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  expenses: state.expenses
});

const mapDispatchToProps = dispatch => ({
  fetchExpenses: () => dispatch(fetchExpenses(''))
});

export const ExpenseTableView = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseTable);
