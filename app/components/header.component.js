import React from 'react';
import SearchComponent from './search.component';

const HeaderComponent = () => (
  <div className="navbar navbar-inverse bg-inverse navbar-toggleable-md">
    <a href="#" className="navbar-brand">FlightNetwork</a>
    <SearchComponent />
  </div>
);

export default HeaderComponent;
