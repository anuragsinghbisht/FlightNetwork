import actionTypes from '../action/actionTypes';

export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES_SUCCESS: {
      localStorage.setItem('movies', JSON.stringify(action.payload));
      return action.payload;
    }
    case actionTypes.SEARCH_MOVIES: {
      let movies = JSON.parse(localStorage.getItem('movies'));
      if(!action.payload) {
        return movies;
      }
      const searchTitle = action.payload.toLowerCase();
      movies = movies.filter((movie) => {
        const title = movie.movie_title.toLowerCase();
        return title.includes(searchTitle);
      });
      return movies;
    }
    case actionTypes.FILTER_MOVIES_BY_GENRE: {
      let movies = JSON.parse(localStorage.getItem('movies'));
      if(!action.payload.length) {
        return movies;
      }
      movies = movies.filter((movie) => {
        const genres = movie.genres.split('|');
        for(let i = 0; i < action.payload.length; i++) {
            if(!genres.includes(action.payload[i])) {
              return false;
            }
        }
        return true;
      });
      return movies;
    }
    case actionTypes.SORT_MOVIES_BY_BUDGET: {
      let movies = [...state];
      return movies.sort((movie1, movie2) => {
        const budget1 = +(movie1.budget);
        const budget2 = +(movie2.budget);
        if(budget1 < budget2) {
          return (action.payload ? -1 : 1);
        }
        if(budget1 > budget2) {
          return (action.payload ? 1 : -1);
        }
        return 0;
      });
    }
    case actionTypes.SORT_MOVIES_BY_YEAR: {
      let movies = [...state];
      return movies.sort((movie1, movie2) => {
        const year1 = +(movie1.title_year);
        const year2 = +(movie2.title_year);
        if(year1 < year2) {
          return (action.payload ? -1 : 1);
        }
        if(year1 > year2) {
          return (action.payload ? 1 : -1);
        }
        return 0;
      });
    }
    default:
      return state;
  };
};
