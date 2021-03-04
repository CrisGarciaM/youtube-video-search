import React from 'react';
import './VideoItem.css';

const VideoItem = (props) => {
  //Prop onVideoSelect is the prop passed from VideoList
  //When user click on the VideoItem, the callback is invoked
  const { video, onVideoSelect } = props;

  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
