import React from 'react';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = (props) => {
  const { videos } = props;

  const renderList = videos.map((video) => {
    return <VideoItem video={video} />;
  });

  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
