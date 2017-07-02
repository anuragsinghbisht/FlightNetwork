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
      localStorage.setItem('genres', JSON.stringify(genres));
      return genres;
    }
    case actionTypes.FILTER_GENRE: {
      const searchValue = action.payload.trim().toLowerCase();
      let genres  = JSON.parse(localStorage.getItem('genres'));
      if(!action.payload) {
        return genres;
      }
      return genres.filter(genre => {
        genre = genre.toLowerCase();
        return genre.includes(searchValue);
      });
    }
    default:
      return state;
  };
};
