import actionTypes from '../action/actionTypes';

export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES_SUCCESS: {
      localStorage.setItem('movies', JSON.stringify(action.payload));
      return action.payload;
    }
    case actionTypes.SEARCH_MOVIES: {
      if(!action.payload) {
        return JSON.parse(localStorage.getItem('movies'));
      }
      let movies = [...state];
      const searchTitle = action.payload.toLowerCase();
      movies = movies.filter((movie) => {
        const title = movie.movie_title.toLowerCase();
        return title.includes(searchTitle);
      });
      return movies;
    }
    default:
      return state;
  };
};
