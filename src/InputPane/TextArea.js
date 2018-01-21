import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
  width: 100%;

  textarea {
    width: 100%;
    height: 10rem;
    margin-bottom: 1.5rem;
  }
`;

const TextArea = ({ onTopTextChange, topText, imageIsSelected }) => (
  <StyledLabel>
    <h4>Text</h4>
    <p>Use the enter key to create vertical space.</p>
    <textarea
      onChange={onTopTextChange}
      value={topText}
      disabled={!imageIsSelected}
      placeholder={
        imageIsSelected
          ? 'Enter text'
          : 'Upload and select an image before entering text.'
      }
    />
  </StyledLabel>
);

TextArea.propTypes = {
  onTopTextChange: PropTypes.func.isRequired,
  topText: PropTypes.string.isRequired,
  imageIsSelected: PropTypes.bool.isRequired,
};

export default TextArea;
