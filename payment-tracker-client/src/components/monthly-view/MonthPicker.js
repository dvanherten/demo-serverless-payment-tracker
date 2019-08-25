import React from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { IconButton, makeStyles } from '@material-ui/core';

import PageHeader from '../PageHeader';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  container: {
    margin: 'auto',
    display: 'flex',
    borderRadius: '4px',
    justifyContent: 'left',
    alignItems: 'center'
  }
}));

const MonthPicker = ({ onDateChanged }) => {
  const [date, setDate] = React.useState(
    new Date(new Date().getFullYear(), new Date().getMonth())
  );
  const classes = useStyles();

  React.useEffect(() => {
    onDateChanged(date);
  }, [date, onDateChanged]);

  const moveForward = () => {
    setDate(new Date(date.setMonth(date.getMonth() + 1)));
  };
  const moveBackward = () => {
    setDate(new Date(date.setMonth(date.getMonth() - 1)));
  };

  return (
    <div className={classes.container}>
      <IconButton className="button" onClick={moveBackward}>
        <NavigateBeforeIcon className={classes.button} />
      </IconButton>
      <PageHeader
        headerText={`${months[date.getMonth()]} ${date.getFullYear()}`}
      />
      <IconButton className="button" onClick={moveForward}>
        <NavigateNextIcon className={classes.button} />
      </IconButton>
    </div>
  );
};

export default MonthPicker;
