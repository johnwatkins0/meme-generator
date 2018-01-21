/* eslint no-use-before-define: 0
react/no-array-index-key: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ImagePane from './ImagePane';
import InputPane from './InputPane';

import './global-styles';
import { row } from './utils/row';

const MemeGeneratorContainer = styled.div`
  ${row};
`;

class MemeGenerator extends React.Component {
  onTopTextChange = this.onTopTextChange.bind(this);
  onSuperimposeChange = this.onSuperimposeChange.bind(this);
  onSelectImage = this.onSelectImage.bind(this);
  onDropImage = this.onDropImage.bind(this);

  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  static defaultProps = {
    images: [],
  };

  static isAcceptableImage = image =>
    image.type &&
    image.preview &&
    ['image/jpeg', 'image/png'].indexOf(image.type) > -1;

  constructor(props) {
    super(props);

    this.state = {
      images: this.props.images,
      generatedImage: '',
      selectedImage: this.props.images[0] || {},
      text: '',
      superImpose: true,
    };
  }

  onTopTextChange(event) {
    this.setState({ text: event.target.value });
  }

  onSuperimposeChange(superImpose) {
    this.setState({ superImpose });
  }

  onSelectImage(selectedImage) {
    this.setState({ selectedImage });
  }

  onDropImage(droppedImages) {
    const images = this.state.images
      .map(image => image)
      .concat(droppedImages.filter(MemeGenerator.isAcceptableImage));

    this.setState({ images });
  }

  render = ({ text, images, selectedImage, superImpose } = this.state) => (
    <MemeGeneratorContainer className="MemeGenerator">
      <ImagePane text={text} image={selectedImage} superImpose={superImpose} />
      <InputPane
        images={images}
        image={selectedImage}
        topText={text}
        superImpose={superImpose}
        onTopTextChange={this.onTopTextChange}
        onSuperimposeChange={this.onSuperimposeChange}
        onSelectImage={this.onSelectImage}
        onDrop={this.onDropImage}
      />
    </MemeGeneratorContainer>
  );
}

export default MemeGenerator;
