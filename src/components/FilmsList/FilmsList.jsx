import React from 'react';
import FilmCard from '../FilmCard';
import PropTypes from 'prop-types';

const FilmsList = (props) => {
  return (
    <div className="catalog__movies-list">
      {props.filmsList.map((film) => (
        <FilmCard
          key = {film.id}
          film = {film}
        />
      ))}
    </div>
  );
};

FilmsList.propTypes = {
  filmsList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
      })),
};

export default FilmsList;
