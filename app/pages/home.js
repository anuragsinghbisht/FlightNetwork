import React from 'react';
import HeaderComponent from '../components/header.component';
import MovieListComponent from '../components/movie-list.component';

const Home = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="container-fluid mt-5">
        <MovieListComponent />
      </div>
    </div>
  )
};

export default Home;
