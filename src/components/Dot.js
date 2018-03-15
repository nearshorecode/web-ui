import React from 'react';
import './Dot.css';

const Dot = ({ id, active, dotClick }) => {
  let name = active ? 'wui-dot wui-dot-active' : 'wui-dot';
  return <div data-id={id} className={name} onClick={e => dotClick(parseInt(e.target.getAttribute('data-id')))} />;
};

export default Dot;
