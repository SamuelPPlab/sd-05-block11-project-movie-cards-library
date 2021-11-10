import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (movies.map((movie, index) => <MovieCard key={movies[index].title} movie={movie} />));
  }
}

export default MovieList;
