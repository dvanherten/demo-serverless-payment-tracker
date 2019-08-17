import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 10
  }
}));

const ProfileButton = ({ initials }) => {
  const classes = useStyles();

  return <Avatar className={classes.avatar}>{initials}</Avatar>;
};

export default ProfileButton;
