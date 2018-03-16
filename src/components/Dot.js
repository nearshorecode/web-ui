import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Dot.css';

class Dot extends PureComponent {
  getActive = () => {
    const { active } = this.props;
    return active ? 'wui-dot wui-dot-active' : 'wui-dot';
  };
  render() {
    const { id, active, dotClick } = this.props;
    const name = this.getActive();
    return <div data-id={id} className={name} onClick={e => dotClick(id)} />;
  }
}

Dot.propTypes = {
  id: PropTypes.number,
  active: PropTypes.bool,
  dotClick: PropTypes.func,
};

Dot.defaultProps = {
  active: false,
};

export default Dot;
