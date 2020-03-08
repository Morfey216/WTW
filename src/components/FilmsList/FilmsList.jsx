import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../FilmCard';

const FilmsList = (props) => {
  return (
    <div className="catalog__movies-list">
      {props.filmsList.map((film) => (
        <FilmCard
          key = {film.id}
          name = {film.name}
          previevImg = {film.previevImg}
          previevLink = {film.previevLink}
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
        previevImg: PropTypes.string.isRequired,
        previevLink: PropTypes.string.isRequired,
      })),
};

export default FilmsList;
