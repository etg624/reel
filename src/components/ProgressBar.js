import React from 'react';
import '../styles/ProgressBar.css';

function ProgressBar(props) {
  const { fill } = props;
  const color =
    fill > 75
      ? '#86e01e'
      : fill > 50
      ? '#f2d31b'
      : fill > 25
      ? '#f2b01e'
      : '#f63a0f';
  return (
    <div className="progress">
      <div
        className="progress-bar"
        style={{ width: `${fill}%`, backgroundColor: color }}
      />
    </div>
  );
}

export default ProgressBar;
