import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../action/movies.actions';

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

class MovieListComponent extends React.Component {
  componentDidMount() {
    this.props.fetchMovies();
  }
  render(){
    return(
        this.props.movies &&
        <div className="card-columns">
          {
            this.props.movies.map((movie, i) => (
              <div className="card" key={i}>
                <h4 className="card-header">
                  <a href={movie.movie_imdb_link} target="_blank">{movie.movie_title}</a>
                </h4>
                <div className="card-block">
                  <div className="row">
                    <div className="col-md-12">
                      <label>Director</label>
                      <span>{movie.director_name}</span>
                    </div>
                    <div className="col-md-6">
                      <label>Actor</label>
                      <span>{movie.actor_1_name}</span>
                    </div>
                    <div className="col-md-6">
                      <label>Actor</label>
                      <span>{movie.actor_2_name}</span>
                    </div>
                    <div className="col-md-12">
                      <label>Genres</label>
                      <span>{movie.genres}</span>
                    </div>
                    <div className="col-md-6">
                      <label>Language</label>
                      <span>{movie.language}</span>
                    </div>
                    <div className="col-md-6">
                      <label>Country</label>
                      <span>{movie.country}</span>
                    </div>
                    <div className="col-md-6">
                      <label>Ratings</label>
                      <span>{movie.content_rating}</span>
                    </div>
                    <div className="col-md-6">
                      <label>Budget</label>
                      <span>{movie.budget}</span>
                    </div>
                    <div className="col-md-6">
                      <label>Year</label>
                      <span>{movie.title_year}</span>
                    </div>
                    <div className="col-md-12">
                      <label>Keywords</label>
                      <span>{movie.plot_keywords}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
    );
  }
};

export default connect(mapStateToProps, actions)(MovieListComponent)
