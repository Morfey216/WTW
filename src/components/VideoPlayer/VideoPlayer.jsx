import React from 'react';
import PropTypes from "prop-types";

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
    this.state = {
      isPlaying: false
    };

    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
  }

  componentDidMount() {
    const {src} = this.props;
    const video = this._videoRef.current;

    video.src = src;
    video.muted = true;
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.src = ``;
    video.muted = false;
    clearTimeout(this._timeoutOnMouseEnter);
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.state.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  _handleMouseEnter() {
    this._timeoutOnMouseEnter = setTimeout(() => {
      this.setState({isPlaying: true});
    }, 1000);
  }

  _handleMouseLeave() {
    this.setState({isPlaying: false});
    clearTimeout(this._timeoutOnMouseEnter);
  }

  render() {
    const {src, previevImg} = this.props;

    return (
      <div className="small-movie-card__image"
        onMouseEnter = {this._handleMouseEnter}
        onMouseLeave = {this._handleMouseLeave}>
        <video
          src = {src}
          ref = {this._videoRef}
          width = "280"
          height = "175"
          poster = {previevImg}
        />
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  previevImg: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default VideoPlayer;
