import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './CardList.css';

class CardList extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className="CardList">
        {children}
      </div>
    );
  }
}

CardList.propTypes = {};

export default CardList;
