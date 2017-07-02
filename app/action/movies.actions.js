import axios from 'axios';
import actionTypes from './actionTypes';
import { URL, createAction } from './helper';
import movies from '../mock';

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

export const filterGenre = (genre) => {
  return (dispatch) => {
    dispatch(createAction(actionTypes.FILTER_GENRE, genre));
  };
};

export const filterByGenre = (genres) => {
  return (dispatch) => {
    dispatch(createAction(actionTypes.FILTER_MOVIES_BY_GENRE, genres));
  };
};

export const sortMoviesByBudget = (flag) => {
  return (dispatch) => {
    dispatch(createAction(actionTypes.SORT_MOVIES_BY_BUDGET, flag));
  };
};

export const sortMoviesByYear = (flag) => {
  return (dispatch) => {
    dispatch(createAction(actionTypes.SORT_MOVIES_BY_YEAR, flag));
  };
};
