import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Card.css';

const VERTICAL_ALIGN = {
  top: 'top',
  middle: 'middle',
  bottom: 'bottom',
}

class Card extends PureComponent {
  setAlignment = alignment => {
    switch (alignment) {
      case VERTICAL_ALIGN.top:
        return { top: '0' };
      case VERTICAL_ALIGN.middle:
        return { top: '50%', transform: 'translate(0, -50%)' };
      case VERTICAL_ALIGN.bottom:
        return { top: '100%', transform: 'translate(0, -100%)' };
      default:
        return { top: '50%', transform: 'translate(0, -50%)' };        
    }
  }

  render() {
    const { roundness, alignment, style, text } = this.props;

    return (
      <div className="Card"
        style={{
          borderRadius: roundness ? roundness : 0,
          ...style,
        }}>
        <div className="content"
          style={{
            top: this.setAlignment(alignment).top,
            transform: this.setAlignment(alignment).transform
          }}>
          {text}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  roundness: PropTypes.string,
  alignment: PropTypes.string,
  style: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    color: PropTypes.string,
  }),
  text: PropTypes.string.isRequired,
};

export default Card;
