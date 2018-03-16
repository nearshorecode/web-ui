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

    return <div className="wui-dots-container">{dots}</div>;
  }
}

Dots.propTypes = {
  index: PropTypes.number,
  quantity: PropTypes.number,
  dotClick: PropTypes.func,
};

Dots.defaultProps = {
  index: 0,
  quantity: 0,
};

export default Dots;
