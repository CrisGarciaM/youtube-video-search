import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import VideoList from './VideoList/VideoList';
import VideoDetail from './VideoDetail/VideoDetail';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,

      //Adds a default video to display when user searches
      selectedVideo: response.data.items[0],
    });
  };

  //Call Back method, pass as a prop to the videoList
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {
          //Grid has 16 default columns}
        }
        <div className="ui grid">
          <div className="ui row">
            {
              //Video detail will occupied the space of eleven columns out of 16
            }
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            {
              //Video list will occupied the space of five columns out of 16
            }
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
