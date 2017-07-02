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
    return (
      <button className="btn btn-outline-secondary" onClick={this.toggleSort}>
        {
          this.state.direction !== null &&
          <i className={"fa " + (this.state.direction ? "fa fa-sort-numeric-desc pr-2" : "fa fa-sort-numeric-asc pr-2")}></i>
        }
        <span>Year</span>
      </button>
    );
  }
};

export default connect(null, actions)(SortByYearComponent);
