import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core';
import PayButton from './PayButton';

const useStyles = makeStyles({
  card: {
    width: 290
  }
});

const MonthlyViewButtons = ({ id, status, changePaidStatus }) => (
  <ButtonGroup fullWidth aria-label="full width outlined button group">
    {status !== 'Paid' && (
      <PayButton onClick={() => changePaidStatus(id, 'Paid')}>
        Mark Paid
      </PayButton>
    )}
    {status !== 'Not Paid' && (
      <Button
        color="secondary"
        onClick={() => changePaidStatus(id, 'Not Paid')}
      >
        Mark Unpaid
      </Button>
    )}
    {status !== 'N/A' && (
      <Button onClick={() => changePaidStatus(id, 'N/A')}>Mark N/A</Button>
    )}
  </ButtonGroup>
);

const MonthlyViewItem = ({ id, name, status, changePaidStatus }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Currently {status}
        </Typography>
      </CardContent>
      <CardActions>
        <MonthlyViewButtons
          id={id}
          status={status}
          changePaidStatus={changePaidStatus}
        ></MonthlyViewButtons>
      </CardActions>
    </Card>
  );
};

export default MonthlyViewItem;
