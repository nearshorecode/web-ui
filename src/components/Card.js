import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Card.css';

const VERTICAL_ALIGN = {
  top: 'top',
  middle: 'middle',
  bottom: 'bottom',
};

class Card extends PureComponent {
  handleClick = e => {
    e.preventDefault();
    const { onClick } = this.props;

    if (onClick) {
      onClick();
    }
  };

  render() {
    const { roundness, alignment, style, size, text, onClick } = this.props;

    return (
      <div
        className="Card"
        style={{
          borderRadius: roundness,
          ...style,
          ...size,
          cursor: onClick ? 'pointer' : 'inherit',
        }}
        onClick={this.handleClick}>
        <div className="content" style={{ verticalAlign: VERTICAL_ALIGN[alignment] }}>
          {text}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  roundness: PropTypes.string,
  alignment: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  text: PropTypes.string,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  roundness: '0',
  alignment: 'middle',
  style: {
    backgroundColor: 'black',
  },
  size: {
    width: '250px',
    height: '250px',
  },
  text: '',
};

export default Card;
