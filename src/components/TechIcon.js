import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const IMAGE_PATH = './assets/tech-icons/';

class TechIcon extends PureComponent {
  render() {
    const { name, size} = this.props;

    const src = `${IMAGE_PATH}${name}.png`;

    return (
      <img src={src} alt={src} style={{...size}}/>
    );
  }
}

TechIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

TechIcon.defaultProps = {
  size: {
    width: '78px',
    height: '78px',
  }
};

export default TechIcon;
