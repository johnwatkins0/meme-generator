import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';

import BackgroundImage from './BackgroundImage';

import { row } from '../utils/row';
import { col } from '../utils/col';

const StyledContainer = styled.div`
  ${col(12)};
`;

const StyledSection = styled.div`
  ${row};
`;

const StyledThumbnailContainer = styled.div`
  ${row};
`;

const StyledDropzone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  font-size: 89.1%;
  text-transform: uppercase;
`;

const StyledNoUploadedMessage = styled.div`
  padding: 0 1rem;
`;

const HelpText = styled.p`
  ${col(12)};
`;

const BackgroundImageArea = ({
  images,
  onSelectImage,
  onDrop,
  dropzoneStyles = {
    width: '100%',
    padding: '1.5rem',
    transition: 'all .2s',
    backgroundColor: 'rgba(0, 0, 0, .25)',
    borderRadius: 4,
    border: '3px dashed rgba(0, 0, 0, .35)',
    borderColor: 'rgba(0, 0, 0, .35)',
  },
}) => (
  <StyledContainer>
    <StyledSection>
      <h4>Upload Background Images</h4>
      <Dropzone
        onDrop={onDrop}
        style={dropzoneStyles}
        accept="image/jpeg, image/png"
        acceptStyle={Object.assign({}, dropzoneStyles, {
          borderColor: 'green',
        })}
        rejectStyle={Object.assign({}, dropzoneStyles, {
          borderColor: 'red',
        })}
      >
        <StyledDropzone>Drop images</StyledDropzone>
      </Dropzone>
    </StyledSection>
    <StyledSection>
      <h4>Select Your Background Image</h4>
      <StyledThumbnailContainer>
        {images.length === 0 ? (
          <StyledNoUploadedMessage>No images uploaded.</StyledNoUploadedMessage>
        ) : null}
        {images.map(image => (
          <BackgroundImage
            key={image.name}
            image={image}
            onSelectImage={onSelectImage}
          />
        ))}
        {images.length === 0 ? null : (
          <HelpText>Click an image to select it.</HelpText>
        )}
      </StyledThumbnailContainer>
    </StyledSection>
  </StyledContainer>
);

BackgroundImageArea.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  dropzoneStyles: PropTypes.objectOf(PropTypes.any),
  onDrop: PropTypes.func.isRequired,
  onSelectImage: PropTypes.func.isRequired,
};

export default BackgroundImageArea;
