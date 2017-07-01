import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../action/movies.actions';

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({ name: e.target.value });
  }

  handleSearch (e) {
    e.preventDefault();
    this.props.searchMovies(this.state.name);
  }

  render(){
    return(
      <form className="form-inline w-100 justify-content-end" onSubmit={this.handleSearch}>
        <input className="form-control mr-sm-2" type="text" placeholder="Search" onChange={this.handleChange} />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    );
  }
};

export default connect(null, actions)(SearchComponent)
