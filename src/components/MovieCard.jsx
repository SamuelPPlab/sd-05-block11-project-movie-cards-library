import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return ( 
      <p>
        {title}
        <img src={imagePath} alt={title} />
      </p>
    );
  }
}

export default MovieCard;





