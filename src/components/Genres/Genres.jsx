import React from 'react';
import PropTypes from 'prop-types';
import Genre from '../Genre';

const Genres = (props) => {
  return (
    <ul className="catalog__genres-list">
      {props.genres.map((genre) => (
        <Genre
          key = {genre}
          genre = {genre}
        />
      ))}
    </ul>
  );
};

Genres.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Genres;
