import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { expensesReducer } from './reducers/expenses.reducer';
import { expensesMiddleware } from './middleware/feature/expenses';
import { apiMiddleware } from './middleware/core/api';
import { uiReducer } from './reducers/ui.reducer';
import { notificationsReducer } from './reducers/notification.reducer';
import { normalizeMiddleware } from './middleware/core/normalize';
import { notificationMiddleware } from './middleware/core/notification';
import { actionSplitterMiddleware } from './middleware/core/actionSplitter';
import { loggerMiddleware } from './middleware/core/logger';

// shape the state structure
const rootReducer = combineReducers({
  expenses: expensesReducer,
  ui: uiReducer,
  notification: notificationsReducer
});

// create the feature middleware array
const featureMiddleware = [expensesMiddleware];

// create the core middleware array
const coreMiddleware = [
  actionSplitterMiddleware,
  apiMiddleware,
  normalizeMiddleware,
  notificationMiddleware,
  loggerMiddleware
];

// compose the middleware with additional (optional) enhancers,
// DevTools.instrument() will enable dev tools integration
const enhancer = composeWithDevTools(
  applyMiddleware(...featureMiddleware, ...coreMiddleware)
);

export default function configureStore(preloadedState) {
  const store = createStore(rootReducer, preloadedState, enhancer);

  return store;
}
