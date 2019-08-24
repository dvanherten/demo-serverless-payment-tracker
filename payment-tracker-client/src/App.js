import React from 'react';
import NavBar from './components/layout/NavBar';
import { CssBaseline } from '@material-ui/core';

function App() {
  const [activeTab, setTab] = React.useState(1);

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar activeTab={activeTab} setTab={setTab} />
    </React.Fragment>
  );
}

export default App;
