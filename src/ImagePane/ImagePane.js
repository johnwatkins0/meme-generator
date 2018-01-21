import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ImageContainer from './ImageContainer';

import { col } from '../utils/col';

const StyledImagePane = styled.div`
  ${col(8)};
`;

const StyledNoImageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 200px;
  font-size: 89.1%;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.15);
`;

const ImagePane = ({ image, superImpose, text }) => (
  <StyledImagePane>
    {Object.keys(image).length ? (
      <ImageContainer image={image} superImpose={superImpose} text={text} />
    ) : (
      <StyledNoImageDiv>No image selected.</StyledNoImageDiv>
    )}
  </StyledImagePane>
);

ImagePane.propTypes = {
  image: PropTypes.objectOf(PropTypes.any).isRequired,
  superImpose: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default ImagePane;
