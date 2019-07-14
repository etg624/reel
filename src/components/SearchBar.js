import React from 'react';

function SearchBar(props) {
  return (
    <input
      className="search"
      type="text"
      value={props.searchVal}
      onChange={props.onChange}
      placeholder="Search for an item..."
    />
  );
}

export default SearchBar;
