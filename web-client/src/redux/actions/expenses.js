// feature name
export const EXPENSES = '[Expenses]';

// action types
export const FETCH_EXPENSES = `${EXPENSES} FETCH`;
export const CREATE_EXPENSE = `${EXPENSES} CREATE`;
export const UPDATE_EXPENSE = `${EXPENSES} UPDATE`;
export const DELETE_EXPENSE = `${EXPENSES} DELETE`;
export const SET_EXPENSES = `${EXPENSES} SET`;

// action creators
export const fetchExpenses = ({ query }) => ({
  type: FETCH_EXPENSES,
  payload: query
});

export const createExpense = ({ name }) => ({
  type: CREATE_EXPENSE,
  payload: name
});

export const updateExpense = ({ id, name }) => ({
  type: UPDATE_EXPENSE,
  payload: { id, name }
});

export const deleteExpense = ({ id }) => ({
  type: DELETE_EXPENSE,
  payload: id
});

export const setExpenses = ({ expenses, normalizeKey }) => ({
  type: SET_EXPENSES,
  payload: expenses,
  meta: { normalizeKey, feature: EXPENSES }
});
