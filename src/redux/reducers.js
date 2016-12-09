import { combineReducers } from 'redux';

import { actionTypes } from './actions';

const isdef = (key) => {
  return (key !== null && key !== '' && typeof key !== undefined);
};

const accountData = (state={}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ACCOUNT_SUCCESS:
      return Object.assign(state, action.data, {
        profile_image_optimal: action.data.profile_image.image_url_full
      });
    case actionTypes.UPDATE_ACCOUNT_SUCCESS:
      return Object.assign(state, action.data);
    default:
      return state;
  }
};

const percentCompleted = (state={completion_percentage: 0, completion: {}}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ACCOUNT_SUCCESS:
      const json = action.data;
      const completion = {
        bio: isdef(json.bio),
        name: isdef(json.name),
        country: isdef(json.name),
        profile_image: json.profile_image.has_image,
        year_of_birth: isdef(json.year_of_birth),
        level_of_education: isdef(json.level_of_education),
        language_proficiencies: json.language_proficiencies.length > 0,
        gender: isdef(json.gender),
        goals: isdef(json.goals)
      };
      const completion_percentage = Object.values(completion).filter(x => x).length / Object.keys(completion).length;

      return Object.assign(state, {
        completion_percentage,
        completion
      });
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  accountData,
  percentCompleted
});
