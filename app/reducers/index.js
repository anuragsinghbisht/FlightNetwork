import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  loading: loadingReducer,
  error: errorReducer
});

export default rootReducer;
