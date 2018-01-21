import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import domToImage from 'dom-to-image';
import FileSaver from 'file-saver';

const StyledImageContainer = styled.div`
  position: relative;
`;

const textStyles = ({ superImpose }) =>
  superImpose
    ? `
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
display: flex;
padding: 0 1.5rem;
background-color: rgba(0, 0, 0, .15);
align-items: stretch;
flex-wrap: wrap;

div {
  margin-top: 1.5rem;
  width: 100%;
  color: white;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0px 0px 5px rgba(0,0,0,0.7);
  font-weight: 900;
  font-size: 2rem;

  p {
    min-height: 1rem;
  }
}
`
    : `
display: block;
padding: .75rem;

div {
  color: black;

  p {
    margin-bottom: .375rem;
    min-height: .375rem;
  }
}
`;

const StyledTextContainer = styled.div`
  ${textStyles};
`;

const StyledImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const StyledButtonContainer = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const StyledDownloadButton = styled.button`
  max-width: 400px;
  padding: 0.75rem 1.5rem;
  font-size: 1.333rem;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.9);
  border: none;
  transition: all 0.2s;

  &:hover {
    background: black;
  }
`;

class ImageContainer extends React.Component {
  downloadImage = this.downloadImage.bind(this);

  static propTypes = {
    image: PropTypes.objectOf(PropTypes.any).isRequired,
    superImpose: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  };

  downloadImage() {
    domToImage.toBlob(this.captureDiv).then(blob => {
      FileSaver.saveAs(blob, 'my-meme.png');
    });
  }

  render = ({ image, superImpose, text } = this.props) => (
    <div>
      <StyledImageContainer>
        <div
          ref={div => {
            this.captureDiv = div;
          }}
        >
          <div>
            <StyledImg src={image.preview} alt={text} />
          </div>

          <StyledTextContainer superImpose={superImpose}>
            <div>
              {text
                .split('\n')
                .map((paragraph, i) => <p key={i}>{paragraph}</p>)}
            </div>
          </StyledTextContainer>
        </div>
      </StyledImageContainer>
      <StyledButtonContainer>
        <StyledDownloadButton onClick={this.downloadImage}>
          Download
        </StyledDownloadButton>
      </StyledButtonContainer>
    </div>
  );
}

export default ImageContainer;
