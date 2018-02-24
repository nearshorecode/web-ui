import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TechIcon } from './index';

import './TechIconList.css';

export const FLOWS = {
  vertical: 'vertical',
  horizontal: 'horizontal',
};

class TechIconList extends Component {
  mapIcons = () => {
    const { icons } = this.props;

    return icons.map((icon, idx) => {
      const { name, width, height, style } = icon;
      return <TechIcon name={name} size={{ width, height }} key={idx} style={style} />;
    });
  };

  getFlow = () => {
    const { flow } = this.props;

    return flow === FLOWS.vertical ? 'column' : 'row';
  };

  render() {
    const flow = this.getFlow();

    return (
      <div className="wui-tech-icon-list" style={{ flexDirection: flow }}>
        {this.mapIcons()}
      </div>
    );
  }
}

TechIconList.propTypes = {
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      width: PropTypes.string,
      height: PropTypes.string,
      style: PropTypes.object,
    })
  ).isRequired,
  flow: PropTypes.string,
};

TechIconList.defaultProps = {
  flow: FLOWS.horizontal,
};

export default TechIconList;
