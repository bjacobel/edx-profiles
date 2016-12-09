import { combineReducers } from 'redux';

const accountData = (state={}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const percentCompleted = (state=0, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  accountData,
  percentCompleted
});
