import React from 'react';
import './VideoDetails.css';

const VideoDetail = (props) => {
  const { video } = props;

  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="videoPlayer" src={videoSrc} />
      </div>
      <div className="ui segment details-container">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
