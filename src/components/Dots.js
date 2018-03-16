import React from 'react';
import Dot from './Dot';
import './Dots.css';

const Dots = ({ index, quantity, dotClick }) => {
  let dots = [];
  for (let i = 0; i < quantity; i++) {
    let isActive = i === index ? true : false;
    dots.push(<Dot key={i} id={i} active={isActive} dotClick={dotClick} />);
  }
  return <div className="wui-dots-container">{dots}</div>;
};

export default Dots;
