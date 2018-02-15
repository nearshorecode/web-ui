import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Stack.css';

export const ORIENTATION = {
  vertical: 'vertical',
  horizontal: 'horizontal'
};

class Stack extends PureComponent {
  getFlow = () => {
    const { orientation } = this.props;

    return orientation === ORIENTATION.vertical ? 'column' : 'row' ;
  }

  render() {
    const { children } = this.props;

    const flow = this.getFlow();

    return (
      <div className="wui-Stack" style={{flexFlow: flow}}>
        { children }
      </div>
    );
  }
}

Stack.propTypes = {
  orientation: PropTypes.string,
};

Stack.defaultProps = {
  orientation: ORIENTATION.vertical,
}

export default Stack;
