import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Icon.css';

class Icon extends PureComponent {
  render() {
    const { imageSrc, size, horizontal} = this.props;
    return (
      <div className={`Icon ${horizontal}`}>
        <img src={imageSrc} alt={imageSrc} style={{...size}}/>
      </div>
    );
  }
}

Icon.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  horizontal: PropTypes.string,
};
export default Icon;
