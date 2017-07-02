import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../action/movies.actions';

class SortByBudgetComponent extends React.Component {
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
    this.props.sortMoviesByBudget(this.state.direction);
  }
  render() {
    return (
      <button className="btn btn-outline-secondary" onClick={this.toggleSort}>
        {
          this.state.direction !== null &&
          <i className={this.state.direction ? "fa fa-sort-numeric-desc pr-2" : "fa fa-sort-numeric-asc pr-2"}></i>
        }
        <span>Budget</span>
      </button>
    );
  }
};

export default connect(null, actions)(SortByBudgetComponent);
