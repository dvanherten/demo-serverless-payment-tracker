import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@material-ui/core';

const ExpenseEditor = ({ open, item, onSave, onCancel }) => {
  const isNew = item == null;
  const emptyItem = { id: '', name: '' };
  const [values, setValues] = React.useState(emptyItem);

  React.useEffect(() => {
    if (item) setValues(item);
    else setValues(emptyItem);
  }, [item, emptyItem]);

  const handleSubmit = e => {
    e.preventDefault();
    onSave(values);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby="form-dialog-title"
      fullWidth
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title">
          {isNew ? 'Add' : 'Edit'} Expense
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus={isNew}
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            required
            value={values.name}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="secondary" variant="contained">
            Cancel
          </Button>
          <Button color="primary" type="submit" variant="contained">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ExpenseEditor;
