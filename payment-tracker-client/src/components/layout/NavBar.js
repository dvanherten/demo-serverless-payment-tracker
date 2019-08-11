import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const NavBar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Payment Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
