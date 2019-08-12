import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Avatar,
  Tabs,
  Tab,
  Toolbar,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  avatar: {
    margin: 10
  },
  tabs: {
    marginLeft: theme.spacing(3),
    flexGrow: 1
  }
}));

const NavBar = ({ activeTab, setTab }) => {
  const classes = useStyles();
  function handleChange(e, newValue) {
    setTab(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Payment Tracker
          </Typography>
          <Tabs
            value={activeTab}
            onChange={handleChange}
            className={classes.tabs}
          >
            <Tab label="Monthly View" />
            <Tab label="Expenses" />
          </Tabs>
          <Avatar className={classes.avatar}>DV</Avatar>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
