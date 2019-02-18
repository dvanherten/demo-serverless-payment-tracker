import { SET_EXPENSES } from '../actions/expenses';

const initState = [];

export const expensesReducer = (expenses = initState, action) => {
  switch (action.type) {
    case SET_EXPENSES:
      return action.payload;

    default:
      return expenses;
  }
};
