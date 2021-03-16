import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import VideoList from './VideoList/VideoList';
import VideoDetail from './VideoDetail/VideoDetail';
import youtube from '../apis/youtube';
import './App.css';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit('What is componentDidMount');
  }, []);

  const onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  return (
    <div className="main">
      <div className="main-app">
        <SearchBar onFormSubmit={onTermSubmit} />
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
