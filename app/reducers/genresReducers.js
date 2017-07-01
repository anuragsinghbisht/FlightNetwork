import actionTypes from '../action/actionTypes';

export const genresReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES_SUCCESS: {
      let genres = action.payload.reduce((genres, movie) => {
        let movieGenre = movie.genres.split('|');
        movieGenre.forEach(genre => {
          if(!genres.includes(genre)) {
            genres.push(genre);
          }
        });
        return genres;
      }, []);
      return genres;
    }
    default:
      return state;
  };
};
