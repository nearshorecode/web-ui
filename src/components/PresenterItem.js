import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export const ItemStatus = {
  INIT: 0,
  LOADED: 1,
  ENTERING: 2,
  ENTERED: 3,
  LEAVING: 4,
  LEFT: 5,
};

class PresenterItem extends React.Component {
  render() {
    const { item, transitionDuration, stateStyle } = this.props;
    if (item) {
      return (
        <div style={stateStyle} className="item">
          <img src={item.image} />
          <div className="text">
            <p>{item.text}</p>
          </div>
        </div>
      );
    }
    return null;
  }
}

PresenterItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  transitionDuration: PropTypes.number.isRequired,
  stateStyle: PropTypes.object,
};

PresenterItem.defaultProps = {
  transitionDuration: 1000,
};

export default PresenterItem;
