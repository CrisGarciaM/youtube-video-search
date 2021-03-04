import React from 'react';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = (props) => {
  //Prop onVideoSelect is the callback method passed from APP
  //It is pass down to the VideoItem as a prop
  const { videos, onVideoSelect } = props;

  const renderList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
