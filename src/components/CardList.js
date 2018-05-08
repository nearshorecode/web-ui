import React, { PureComponent } from 'react';
import './CardList.css';

class CardList extends PureComponent {
  render() {
    const { children } = this.props;

    return <div className="wui-card-list">{children}</div>;
  }
}

export default CardList;
