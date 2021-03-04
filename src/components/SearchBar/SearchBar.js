import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <img alt="video-search" src="/icons/search.svg" />
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="What would you like to search for?"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
