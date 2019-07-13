import React from 'react';
import { connect } from 'react-redux';
import { sortBy } from '../actions';
import '../styles/SortBy.css';

function SortBy(props) {
  const { dispatch } = props;
  function handleRadioChange(e) {
    dispatch(sortBy(e.target.value));
  }
  const sortValues = (
    <li>
      <label>Status:</label>
      <input
        type="radio"
        value="status"
        name="sortBy"
        onChange={e => handleRadioChange(e)}
      />
      <label>Name:</label>
      <input
        type="radio"
        value="name"
        name="sortBy"
        onChange={e => handleRadioChange(e)}
      />
      <label>Percent Saved:</label>
      <input
        type="radio"
        value="percentSaved"
        name="sortBy"
        onChange={e => handleRadioChange(e)}
      />
      <label>Total Price:</label>
      <input
        type="radio"
        value="total"
        name="sortBy"
        onChange={e => handleRadioChange(e)}
      />
    </li>
  );

  return (
    <div className="sort-container">
      <p className="bold">Sort By:</p>
      <ul className="sort-buttons">{sortValues}</ul>
    </div>
  );
}

export default connect()(SortBy);
