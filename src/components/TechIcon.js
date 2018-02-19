import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const IMAGE_PATH = './assets/tech-icons/';

import TECH_ICONS from './assets/tech-icons';

class TechIcon extends PureComponent {
  render() {
    const { name, size, style } = this.props;

    const src = `${IMAGE_PATH}${name}.png`;

    return (
      <img src={TECH_ICONS[name]} alt={src} style={{...style,...size}}/>
    );
  }
}

TechIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  style: PropTypes.object
};

TechIcon.defaultProps = {
  size: {
    width: '78px',
    height: '78px',
  },
  style: {},
};

export default TechIcon;
