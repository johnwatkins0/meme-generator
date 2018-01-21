import React from 'react';
import PropTypes from 'prop-types';

const TextPositionSelect = ({ onSuperimposeChange, superImpose }) => (
  <div>
    <h4>Text Display Options</h4>
    <label htmlFor="superImpose" style={{ display: 'block' }}>
      <input
        id="superImpose"
        type="radio"
        checked={superImpose}
        onChange={() => onSuperimposeChange(true)}
      />
      <span style={{ marginLeft: '.5rem' }}>Superimposed on image</span>
    </label>
    <label htmlFor="showBelow" style={{ display: 'block' }}>
      <input
        id="showBelow"
        type="radio"
        checked={!superImpose}
        onChange={() => onSuperimposeChange(false)}
      />
      <span style={{ marginLeft: '.5rem' }}>Below Image</span>
    </label>
  </div>
);

TextPositionSelect.propTypes = {
  onSuperimposeChange: PropTypes.func.isRequired,
  superImpose: PropTypes.bool.isRequired,
};

export default TextPositionSelect;
