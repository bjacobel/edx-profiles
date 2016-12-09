export const actionTypes = {
  FETCH_ACCOUNT: 'FETCH_ACCOUNT',
  UPDATE_ACCOUNT: 'UPDATE_ACCOUNT'
};

export function fetchAccount(user) {
  return {
    type: actionTypes.FETCH_ACCOUNT,
    user
  };
}

export function updateAccount(user) {
  return {
    type: actionTypes.UPDATE_ACCOUNT,
    user
  };
}
