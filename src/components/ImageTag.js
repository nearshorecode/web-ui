import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './ImageTag.css';

class ImageTag extends PureComponent {
  render() {
    const { imageSrc, tag, size } = this.props;

    return (
      <div className="ImageTag">
        <img src={imageSrc} alt={imageSrc} style={{ ...size }} />
        <span>{tag}</span>
      </div>
    );
  }
}

ImageTag.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default ImageTag;
