import React, { PureComponent } from 'react';

import './Bouncer.css';

class Bouncer extends PureComponent {
  render() {
    return <div className="wui-bouncer">{this.props.children}</div>;
  }
}

export default Bouncer;
