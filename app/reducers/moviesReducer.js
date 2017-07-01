import actionTypes from '../action/actionTypes';

export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES_SUCESS:
      return action.payload;
    default:
      return state;
  };
};
