import { combineReducers } from 'redux';

const accountData = (state={}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  accountData
});
