import React from 'react';
import { CssBaseline } from '@material-ui/core';

import Layout from './components/layout/Layout';
import MonthlyViewPage from './components/MonthlyViewPage';
import ExpensesPage from './components/ExpensesPage';
import AnonymousPage from './components/AnonymousPage';

function App() {
  const [user, setUser] = React.useState(null);

  return (
    <React.Fragment>
      <CssBaseline />
      {user == null && <AnonymousPage setUser={setUser} />}
      {user != null && (
        <Layout
          monthlyViewPage={
            <MonthlyViewPage
              isLoading
              monthlyViewItems={[]}
              onSave={() => {}}
              onDateChanged={() => {}}
            />
          }
          expensesPage={
            <ExpensesPage isLoading expenses={[]} onSave={() => {}} />
          }
          initials="DV"
        />
      )}
    </React.Fragment>
  );
}

export default App;
