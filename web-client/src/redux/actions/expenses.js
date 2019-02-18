// feature name
export const EXPENSES = '[Expenses]';

// action types
export const FETCH_EXPENSES = `${EXPENSES} FETCH`;
export const SET_EXPENSES = `${EXPENSES} SET`;

// action creators
export const fetchExpenses = ({ query }) => ({
  type: FETCH_EXPENSES,
  payload: query
});

export const setExpenses = ({ expenses, normalizeKey }) => ({
  type: SET_EXPENSES,
  payload: expenses,
  meta: { normalizeKey, feature: EXPENSES }
});
