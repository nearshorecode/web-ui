import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Icon.css';

class Icon extends PureComponent {
  render() {
<<<<<<< HEAD:src/components/Icon.js
    const { imageSrc, size} = this.props;
    return (
      <div className="Icon">
=======
    const { imageSrc, size, horizontal} = this.props;
    return (
      <div className={`Icon ${horizontal}`}>
>>>>>>> 042f3e40d9a991d122cfa159685c1c1e76216494:src/components/Icon.js
        <img src={imageSrc} alt={imageSrc} style={{...size}}/>
      </div>
    );
  }
}
<<<<<<< HEAD:src/components/Icon.js
=======

>>>>>>> 042f3e40d9a991d122cfa159685c1c1e76216494:src/components/Icon.js
Icon.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  horizontal: PropTypes.string,
};
export default Icon;
