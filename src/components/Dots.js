import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dot from './Dot';
import './Dots.css';

class Dots extends PureComponent {
  render() {
    const { index, quantity, onDotClick } = this.props;
    let dots = [];
    for (let i = 0; i < quantity; i++) {
      dots.push(<Dot key={i} id={i} active={i === index} onClick={onDotClick} />);
    }

    return <div className="dots-container">{dots}</div>;
  }
}

Dots.propTypes = {
  index: PropTypes.number,
  quantity: PropTypes.number,
  onDotClick: PropTypes.func,
};

export default Dots;
