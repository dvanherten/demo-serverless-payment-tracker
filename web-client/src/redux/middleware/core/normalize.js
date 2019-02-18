import { dataNormalized } from '../../actions/data';
import { setExpenses } from '../../actions/expenses';

export const normalizeMiddleware = ({ dispatch }) => next => action => {
  // filter both by action type and metadata content
  if (action.type.includes('SET') && action.meta.normalizeKey) {
    // notify about the transformation
    dispatch(dataNormalized({ feature: action.meta.feature }));

    // transform the data structure
    const expenses = action.payload.reduce((acc, item) => {
      acc[item[action.meta.normalizeKey]] = item;
      return acc;
    }, {});

    // fire the expenses document action
    next(setExpenses({ expenses, normalizeKey: null }));
  } else {
    next(action);
  }
};
