import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  const { onFormSubmit } = props;

  const [term, setTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="search-bar">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <img alt="video-search" src="/icons/search.svg" />
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="What would you like to search for?"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
