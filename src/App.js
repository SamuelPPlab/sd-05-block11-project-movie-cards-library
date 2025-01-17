import React from 'react';
import './App.css';
import movies from './data';
import MovieList from './components/MovieList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
