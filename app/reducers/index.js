import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { genresReducers } from './genresReducers';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  loading: loadingReducer,
  error: errorReducer,
  genres: genresReducers
});

export default rootReducer;
