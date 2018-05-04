import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Dot.css';

class Dot extends PureComponent {
  handleClick = () => {
    const { id, onClick } = this.props;

    if (onClick) {
      onClick(id);
    }
  };

  render() {
    const { active } = this.props;
    return <div className={active ? 'wui-dot wui-dot-active' : 'wui-dot'} onClick={this.handleClick} />;
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
