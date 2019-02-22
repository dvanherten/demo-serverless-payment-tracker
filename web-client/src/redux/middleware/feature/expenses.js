import { EXPENSES, FETCH_EXPENSES, setExpenses } from '../../actions/expenses';
import { API_ERROR, API_SUCCESS, apiRequest } from '../../actions/api';
import { setLoader } from '../../actions/ui';
import { setNotification } from '../../actions/notification';

export const expensesMiddleware = () => next => action => {
  next(action);

  switch (action.type) {
    case FETCH_EXPENSES:
      next([
        apiRequest({
          body: null,
          method: 'GET',
          url: 'api/expense/',
          feature: EXPENSES
        }),
        setLoader({ state: true, feature: EXPENSES })
      ]);
      break;

    case `${EXPENSES} ${API_SUCCESS}`:
      next([
        setExpenses({ expenses: action.payload, normalizeKey: null }),
        setLoader({ state: false, feature: EXPENSES })
      ]);
      break;

    case `${EXPENSES} ${API_ERROR}`:
      next([
        setNotification({ message: action.payload.message, feature: EXPENSES }),
        setLoader({ state: false, feature: EXPENSES })
      ]);
      break;
    default:
  }
};
