// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <h1 className="rating">{rating}</h1>
      </div>
    );
  }
}
export default Rating;
