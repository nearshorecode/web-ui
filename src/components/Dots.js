import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dot from './Dot';
import './Dots.css';

class Dots extends PureComponent {
  render() {
    const { index, quantity, dotClick } = this.props;
    let dots = [];
    for (let i = 0; i < quantity; i++) {
      dots.push(<Dot key={i} id={i} active={i === index} dotClick={dotClick} />);
    }

    return <div className="dots-container">{dots}</div>;
  }
}

Dot.propTypes = {
  index: PropTypes.number,
  quantity: PropTypes.number,
  dotClick: PropTypes.func,
};

export default Dots;
