import React from 'react';
import { toggleStatus } from '../actions';
import { connect } from 'react-redux';
import '../styles/PauseButton.css';

function PauseButton(props) {
  const { dispatch, status, itemId } = props;
  return (
    <button
      className="pause-button"
      onClick={() => dispatch(toggleStatus(status, itemId))}
    >
      {status === 'active'
        ? 'Pause your saving progress'
        : 'Resume Saving for this product'}
    </button>
  );
}

export default connect()(PauseButton);
