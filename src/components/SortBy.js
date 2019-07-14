import React from 'react';
import { connect } from 'react-redux';
import { sortBy } from '../actions';
import '../styles/SortBy.css';

function SortBy(props) {
  const { dispatch, sortValues } = props;
  function handleRadioChange(e) {
    dispatch(sortBy(e.target.value));
  }
  const radioButtons = sortValues.map(value => {
    return (
      <li key={value}>
        <div>
          <label>
            {// insert a space before all caps
            value
              .replace(/([A-Z])/g, ' $1')
              // uppercase the first character
              .replace(/^./, function(str) {
                return str.toUpperCase();
              })}
          </label>
          <input
            type="radio"
            value={value}
            name="sortBy"
            onChange={e => handleRadioChange(e)}
          />
        </div>
      </li>
    );
  });

  return (
    <div className="sort-container">
      <span className="bold sort-by-text">Sort By:</span>
      <ul className="sort-buttons">{radioButtons}</ul>
    </div>
  );
}

export default connect()(SortBy);
