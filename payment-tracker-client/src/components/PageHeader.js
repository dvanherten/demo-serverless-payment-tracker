import React from 'react';
import { Typography } from '@material-ui/core';

const PageHeader = ({ headerText }) => {
  return <Typography variant="h5">{headerText}</Typography>;
};

export default PageHeader;
