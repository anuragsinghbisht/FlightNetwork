import axios from 'axios';
import actionTypes from './actionTypes';

const URL = `http://starlord.hackerearth.com/movieslisting`;

const createAction = (type, payload) => {
  return {
    type,
    payload
  }
};

export const fetchMoviews = () => {
    return (dispatch) => {
      dispatch(createAction(actionTypes.FETCH_MOVIES_LOADING, true));
      axios.get(url)
        .then(response => {
          console.log(data);
          dispatch(createAction(actionTypes.FETCH_MOVIES_SUCESS, response));
        })
        .catch(error => {
          dispatch(createAction(actionTypes.FETCH_MOVIES_ERROR, error));
        });
    }
};
