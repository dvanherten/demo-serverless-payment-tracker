import React from 'react';
import NavBar from './components/layout/NavBar';

function App() {
  const [activeTab, setTab] = React.useState(1);

  return (
    <div>
      <NavBar activeTab={activeTab} setTab={setTab} />
    </div>
  );
}

export default App;
