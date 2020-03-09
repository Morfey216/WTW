import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../VideoPlayer';

const FilmCard = ({name, previewImg, previewLink}) => {
  return (
    <article className="small-movie-card catalog__movies-card">
      <VideoPlayer
        poster = {previewImg}
        src = {previewLink}
      />
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html"> {name} </a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  name: PropTypes.string.isRequired,
  previewImg: PropTypes.string.isRequired,
  previewLink: PropTypes.string.isRequired,
};

export default FilmCard;
