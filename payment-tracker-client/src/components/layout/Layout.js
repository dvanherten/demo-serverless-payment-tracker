import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import ProfileButton from './ProfileButton';

const useStyles = makeStyles(theme => ({
  headerSpace: {
    paddingTop: theme.spacing(2)
  }
}));

const TabPanel = ({ children, value, index }) => {
  const classes = useStyles();

  if (value !== index) {
    console.log(`Value: ${value} - Index: ${index}`);
    return <React.Fragment />;
  }
  console.log(`Showing index ${index}`);
  return <Container className={classes.headerSpace}>{children}</Container>;
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
