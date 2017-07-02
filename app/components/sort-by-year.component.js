import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../action/movies.actions';

class SortByYearComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: null
    };
    this.toggleSort = this.toggleSort.bind(this);
  }
  toggleSort () {
    this.setState({
      direction: !this.state.direction
    });
    this.props.sortMoviesByYear(this.state.direction);
  }
  render() {
    const sortClass = this.state.direction === null ? "fa-sort"
                        : this.state.direction ? "fa-sort-numeric-desc" : "fa-sort-numeric-asc";
    return (
      <button className="btn btn-outline-secondary" onClick={this.toggleSort}>
        <i className={"fa pr-2 "+sortClass}></i>
        <span>Year</span>
      </button>
    );
  }
};

export default connect(null, actions)(SortByYearComponent);
