// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <div className="movie-card-title"><h4>{title}</h4></div>
          <div className="movie-card-subtitle"><h5>{subtitle}</h5></div>
          <div className="movie-card-storyline"><p>{storyline}</p></div>
          <img src={imagePath} alt={title} className="movie-card-image" />
          <div className="movie-card-rating"><Rating rating={rating} /></div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
