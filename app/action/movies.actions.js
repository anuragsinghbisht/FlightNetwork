import axios from 'axios';
import actionTypes from './actionTypes';
import { URL, createAction } from './helper';

export const fetchMovies = () => {
    return (dispatch) => {
      dispatch(createAction(actionTypes.FETCH_MOVIES_LOADING, true));
      axios.get(URL)
        .then(response => {
          dispatch(createAction(actionTypes.FETCH_MOVIES_SUCCESS, response.data));
        })
        .catch(error => {
          dispatch(createAction(actionTypes.FETCH_MOVIES_ERROR, error));
        })
        .then(() => {
          dispatch(createAction(actionTypes.FETCH_MOVIES_LOADING, false));
        });
    }
};

export const searchMovies = (name) => {
  return (dispatch) => {
    dispatch(createAction(actionTypes.SEARCH_MOVIES, name));
  };
};
