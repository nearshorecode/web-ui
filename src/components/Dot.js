import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Dot.css';

class Dot extends PureComponent {
  getActive = () => {
    const { active } = this.props;
    return active ? 'wui-dot wui-dot-active' : 'wui-dot';
  };

  handleClick = () => {
    const { id, onClick } = this.props;

    if (onClick) {
      onClick(id);
    }
  };

  render() {
    const { active } = this.props;
    const name = this.getActive();
    return <div className={name} onClick={this.handleClick} />;
  }
}

Dot.propTypes = {
  id: PropTypes.number.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

Dot.defaultProps = {
  active: false,
};

export default Dot;
