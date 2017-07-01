import actionTypes from '../action/actionTypes';

export const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES_LOADING:
      return action.payload;
    default:
      return state;
  };
};
