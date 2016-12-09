export const actionTypes = {
  FETCH_ACCOUNT_SUCCESS: 'FETCH_ACCOUNT_SUCCESS',
  FETCH_ACCOUNT_FAILURE: 'FETCH_ACCOUNT_FAILURE',
  UPDATE_ACCOUNT: 'UPDATE_ACCOUNT_SUCCESS'
};

const defaultUserData = {
  "username": "bjacobel",
  "bio": "",
  "requires_parental_consent": false,
  "name": "Brian Jacobel",
  "country": null,
  "is_active": true,
  "profile_image": {
    "image_url_full": "https://d1kekzok76m982.cloudfront.net/prod/1e16a5d4a450eac5d6b261e65c13627d_500.jpg?v=1481243402",
    "image_url_large": "https://d1kekzok76m982.cloudfront.net/prod/1e16a5d4a450eac5d6b261e65c13627d_120.jpg?v=1481243402",
    "image_url_medium": "https://d1kekzok76m982.cloudfront.net/prod/1e16a5d4a450eac5d6b261e65c13627d_50.jpg?v=1481243402",
    "image_url_small": "https://d1kekzok76m982.cloudfront.net/prod/1e16a5d4a450eac5d6b261e65c13627d_30.jpg?v=1481243402",
    "has_image": true
  },
  "year_of_birth": null,
  "level_of_education": null,
  "accomplishments_shared": false,
  "goals": "Applying for a developer position",
  "language_proficiencies": [
    {
      "code": "en"
    }
  ],
  "gender": null,
  "account_privacy": "all_users",
  "mailing_address": "",
  "email": "bjacobel@gmail.com",
  "date_joined": "2016-02-17T16:05:12Z"
};

export function fetchAccount(accountId) {
  return function (dispatch) {
    return fetch(`/api/user/v1/accounts/${accountId}`, {
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
      }
    })
    .then((data) => data.json())
    .catch((error) => {
      console.log('oh no an error');
      return defaultUserData;
    })
    .then((json) => {
      dispatch(fetchAccountSuccess(json));
    });
  };
}

export function fetchAccountSuccess(data) {
  return {
    type: actionTypes.FETCH_ACCOUNT_SUCCESS,
    data
  };
}

export function fetchAccountFailure(data) {
  return {
    type: actionTypes.FETCH_ACCOUNT_FAILURE,
    data
  };
}

export function updateAccount(accountId, diff) {
  return function(dispatch) {
    return fetch(`/api/user/v1/accounts/${accountId}`, {
      credentials: 'same-origin',
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: diff
    })
    .then(data => data.json())
    .then((json) => {
      dispatch(updateAccountSuccess(json));
    });
  };
}

export function updateAccountSuccess(data) {
  return {
    type: actionTypes.UPDATE_ACCOUNT_SUCCESS,
    data
  };
}
