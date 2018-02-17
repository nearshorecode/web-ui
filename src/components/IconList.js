import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'components';
import './IconList.css';

class IconList extends Component {
  render() {
    const { images, flow } = this.props;
    const icons = images.map( (image, idx) => {
      const { imgSrc, width, height } = image;
      return (
        <Icon imageSrc={imgSrc} size={{width, height}} key={idx}/>
      );
    });
    return (
        <div className={"IconList "+ flow}>
          {icons}
        </div>
    );
  }
}
IconList.propTypes = {
    images: PropTypes.array,
    flow: PropTypes.string,
  };
export default IconList;