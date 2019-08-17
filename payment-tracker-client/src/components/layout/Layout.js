import React from 'react';
import NavBar from './NavBar';
import ProfileButton from './ProfileButton';

const TabPanel = ({ children, value, index }) => {
  if (value !== index) {
    console.log(`Value: ${value} - Index: ${index}`);
    return <React.Fragment />;
  }
  console.log(`Showing index ${index}`);
  return children;
};

const Layout = ({ monthlyViewPage, expensesPage, initials }) => {
  const [activeTab, setTab] = React.useState(0);

  return (
    <React.Fragment>
      <NavBar
        activeTab={activeTab}
        setTab={setTab}
        avatar={<ProfileButton initials={initials} />}
      />
      <TabPanel value={0} index={activeTab}>
        {monthlyViewPage}
      </TabPanel>
      <TabPanel value={1} index={activeTab}>
        {expensesPage}
      </TabPanel>
    </React.Fragment>
  );
};

export default Layout;
