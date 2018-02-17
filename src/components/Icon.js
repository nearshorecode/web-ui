import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Icon.css';

class Icon extends PureComponent {
  render() {
    const { imageSrc, size} = this.props;
    return (
      <div className="Icon">
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
};
export default Icon;
