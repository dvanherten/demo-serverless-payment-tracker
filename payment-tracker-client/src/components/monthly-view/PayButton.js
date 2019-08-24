import { Button, withStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

export default withStyles(theme => ({
  root: {
    borderColor: green[500],
    color: green[500],
    '&:hover': {
      backgroundColor: green[50]
    }
  }
}))(Button);
