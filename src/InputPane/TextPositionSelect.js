import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
`;

const StyledLabelText = styled.span`
  margin-left: 0.5rem;
`;

const TextPositionSelect = ({ onSuperimposeChange, superImpose }) => (
  <div>
    <h4>Text Display Options</h4>
    <StyledLabel>
      <input
        type="radio"
        checked={superImpose}
        onChange={() => onSuperimposeChange(true)}
      />
      <StyledLabelText>Superimposed on image</StyledLabelText>
    </StyledLabel>
    <StyledLabel>
      <input
        type="radio"
        checked={!superImpose}
        onChange={() => onSuperimposeChange(false)}
      />
      <StyledLabelText>Below Image</StyledLabelText>
    </StyledLabel>
  </div>
);

TextPositionSelect.propTypes = {
  onSuperimposeChange: PropTypes.func.isRequired,
  superImpose: PropTypes.bool.isRequired,
};

export default TextPositionSelect;
