import actionTypes from '../action/actionTypes';

export const errorReducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES_ERROR:
      return action.payload;
    default:
      return state;
  };
};
