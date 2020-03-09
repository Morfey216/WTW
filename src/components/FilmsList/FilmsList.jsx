import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../FilmCard';

const FilmsList = ({filmsList}) => {
  return (
    <div className="catalog__movies-list">
      {filmsList.map((film) => (
        <FilmCard
          key = {film.id}
          name = {film.name}
          previewImg = {film.previewImg}
          previewLink = {film.previewLink}
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
        previewImg: PropTypes.string.isRequired,
        previewLink: PropTypes.string.isRequired,
      })),
};

export default FilmsList;
