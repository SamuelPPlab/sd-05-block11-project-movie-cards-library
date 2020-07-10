// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';


class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      movies.map(
        (film) => <MovieCard
          key={film.title}
          movie={film}
        />
      )
    );
  }
}

export default MovieList;
