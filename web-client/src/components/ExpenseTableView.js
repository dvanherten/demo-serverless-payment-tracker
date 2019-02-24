import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchExpenses,
  createExpense,
  updateExpense,
  deleteExpense
} from '../redux/actions/expenses';
import { EditableTextField } from './EditableTextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExpenseTable = ({
  expenses,
  fetchExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
  isLoading
}) => {
  useEffect(() => {
    fetchExpenses();
  }, 0);

  if (isLoading) {
    return (
      <div className="container">
        <div className="loader" />
      </div>
    );
  }

  const saveFunction = id => expenseName => {
    updateExpense(id, expenseName);
  };

  const deleteFunction = id => () => {
    deleteExpense(id);
  };

  return (
    <table className="table is-fullwidth">
      <thead>
        <tr>
          <th width="5%" />
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(x => (
          <ExpenseTableRow
            key={x.id}
            name={x.name}
            saveFunction={saveFunction(x.id)}
            deleteFunction={deleteFunction(x.id)}
          />
        ))}
      </tbody>
    </table>
  );
};

ExpenseTable.propTypes = {
  expenses: PropTypes.array,
  fetchExpenses: PropTypes.func.isRequired,
  createExpense: PropTypes.func.isRequired,
  updateExpense: PropTypes.func.isRequired,
  deleteExpense: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};

const ExpenseTableRow = ({ name, saveFunction, deleteFunction }) => (
  <tr>
    <td>
      <span className="button is-danger is-small" onClick={deleteFunction}>
        <span className="icon is-small">
          <FontAwesomeIcon icon="trash" />
        </span>
      </span>
    </td>
    <td>
      <EditableTextField text={name} saveFunction={saveFunction} isSmall />
    </td>
  </tr>
);

ExpenseTableRow.propTypes = {
  name: PropTypes.string.isRequired,
  saveFunction: PropTypes.func.isRequired,
  deleteFunction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  expenses: state.expenses,
  isLoading: state.ui.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchExpenses: () => dispatch(fetchExpenses({})),
  createExpense: name => dispatch(createExpense({ name })),
  updateExpense: (id, name) => dispatch(updateExpense({ id, name })),
  deleteExpense: id => dispatch(deleteExpense({ id }))
});

export const ExpenseTableView = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseTable);
