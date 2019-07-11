import React from 'react';
import { toggleStatus } from '../actions';
import { connect } from 'react-redux';

function PauseButton(props) {
  const { dispatch, status, itemId } = props;
  return (
    <button onClick={() => dispatch(toggleStatus(status, itemId))}>
      {status === 'active'
        ? 'Pause your saving progress'
        : 'Resume Saving for this product'}
    </button>
  );
}

export default connect()(PauseButton);
