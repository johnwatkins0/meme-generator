import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { col } from '../utils/col';

const StyledBackgroundImageContainer = styled.div`
  ${col(6)};
`;

const StyledBackgroundImage = styled.button`
  padding: 0;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
    margin: 0;
  }
`;

const BackgroundImage = ({ image, onSelectImage }) => (
  <StyledBackgroundImageContainer>
    <StyledBackgroundImage onClick={() => onSelectImage(image)}>
      <img src={image.preview} alt="Image thumbnail" />
    </StyledBackgroundImage>
  </StyledBackgroundImageContainer>
);

BackgroundImage.propTypes = {
  onSelectImage: PropTypes.func.isRequired,
  image: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default BackgroundImage;
