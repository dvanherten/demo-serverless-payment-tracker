import { SET_LOADER } from '../actions/ui';

const initState = {
  isLoading: false
};

export const uiReducer = (ui = initState, action) => {
  switch (true) {
    case action.type.includes(SET_LOADER):
      return { ...ui, isLoading: action.payload };

    default:
      return ui;
  }
};
