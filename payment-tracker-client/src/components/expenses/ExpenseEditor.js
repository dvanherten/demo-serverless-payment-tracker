import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@material-ui/core';

const useForm = (callback, startingObject, requiredFields) => {
  const [inputs, setInputs] = React.useState(startingObject || {});

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

const ExpenseEditor = ({ open, item, onSave, onCancel }) => {
  const isNew = item == null;

  const save = () => {
    onSave(inputs);
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(save, item);

  return (
    <Dialog open={open} onClose={onCancel} aria-labelledby="form-dialog-title">
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
            value={inputs.name}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="secondary">
            Cancel
          </Button>
          <Button color="primary" type="submit">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ExpenseEditor;
