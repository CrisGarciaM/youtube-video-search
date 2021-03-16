import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import VideoList from './VideoList/VideoList';
import VideoDetail from './VideoDetail/VideoDetail';
import useVideos from '../hooks/useVideos';
import './App.css';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('buildings');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="main">
      <div className="main-app">
        <SearchBar onFormSubmit={search} />
        {
          //Grid has 16 default columns}
        }
        <div className="ui grid">
          <div className="ui row">
            {
              //Video detail will occupied the space of eleven columns out of 16
            }
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            {
              //Video list will occupied the space of five columns out of 16
            }
            <div className="five wide column video-list">
              <VideoList
                className="videoItem"
                videos={videos}
                onVideoSelect={setSelectedVideo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
