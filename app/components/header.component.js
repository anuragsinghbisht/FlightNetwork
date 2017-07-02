import React from 'react';
import SearchComponent from './search.component';
import FilterGenreComponent from './filter-genre.component';
import SortByYearComponent from './sort-by-year.component';
import SortByBudgetComponent from './sort-by-budget.component';

const HeaderComponent = () => (
  <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#">FlightNetwork</a>

    <div className="collapse navbar-collapse justify-content-end" id="navbar-menu">
      <ul className="navbar-nav">
        <li className="nav-item">
          <SortByYearComponent />
        </li>
        <li className="nav-item ml-2">
          <SortByBudgetComponent />
        </li>
        <li className="nav-item dropdown ml-2">
          <FilterGenreComponent />
        </li>
      </ul>
      <SearchComponent />
    </div>
  </nav>
);

export default HeaderComponent;
