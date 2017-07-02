import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../action/movies.actions';

const mapStateToProps = (state) => {
  return {
    genres: state.genres
  };
};

class FilterGenreComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.filterByGenre = this.filterByGenre.bind(this);
    this.state = {
      genreSelected: []
    };
  }
  handleChange (e) {
    this.props.filterGenre(e.target.value);
  }
  filterByGenre (e) {
    let genres = this.state.genreSelected;
    if(!genres.includes(e.target.value)) {
      genres.push(e.target.value);
    } else {
      genres = genres.filter(genre => genre !== e.target.value);
    }
    this.setState({
      genreSelected: genres
    });
    this.props.filterByGenre(genres);
  }
  render () {
    return (
      <div className="dropdown">
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fa fa-filter" aria-hidden="true"></i> Genre
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="input-group p-2">
              <i className="fa fa-search input-group-addon" id="basic-addon1"></i>
              <input onKeyUp={this.handleChange} type="text" className="form-control" placeholder="Search" aria-describedby="basic-addon1"/>
          </div>
          <div className="dropdown-divider"></div>
          {
            this.props.genres.map((genre, i) => (
              <div className="dropdown-item" key={i}>
                <input type="checkbox" name={genre} value={genre} onClick={this.filterByGenre} checked={this.state.genreSelected.includes(genre)}/>
                <span className="text-muted pl-2">{genre}</span>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, actions)(FilterGenreComponent)
