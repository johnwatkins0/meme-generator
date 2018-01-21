import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TextArea from './TextArea';
import BackgroundImageArea from './BackgroundImageArea';
import TextPositionSelect from './TextPositionSelect';

import { col } from '../utils/col';

const StyledInputPane = styled.div`
  ${col(4)};
`;

const InputPane = ({
  images,
  topText,
  onTopTextChange,
  superImpose,
  onSuperimposeChange,
  onSelectImage,
  onDrop,
  image,
}) => (
  <StyledInputPane>
    <BackgroundImageArea
      onSelectImage={onSelectImage}
      images={images}
      onDrop={onDrop}
    />
    <TextPositionSelect
      onSuperimposeChange={onSuperimposeChange}
      superImpose={superImpose}
    />
    <TextArea
      onTopTextChange={onTopTextChange}
      imageIsSelected={Object.keys(image).length > 0}
      topText={topText}
    />
  </StyledInputPane>
);

InputPane.propTypes = {
  images: PropTypes.array.isRequired,
  topText: PropTypes.string.isRequired,
  onTopTextChange: PropTypes.func.isRequired,
  onSuperimposeChange: PropTypes.func.isRequired,
  onSelectImage: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
};

export default InputPane;
