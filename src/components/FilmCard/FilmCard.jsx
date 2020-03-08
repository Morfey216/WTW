import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../VideoPlayer';

const FilmCard = (props) => {
  const {
    name,
    previevImg,
    previevLink,
  } = props;

  return (
    <article className="small-movie-card catalog__movies-card">
      <VideoPlayer
        previevImg = {previevImg}
        src = {previevLink}
      />
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html"> {name} </a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  name: PropTypes.string.isRequired,
  previevImg: PropTypes.string.isRequired,
  previevLink: PropTypes.string.isRequired,
};

export default FilmCard;
