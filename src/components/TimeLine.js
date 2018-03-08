import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import './TimeLine.css';

export const INIT = {
  left: 'left',
  right: 'right',
};

class TimeLine extends PureComponent {
  getInit = () => {
    const { init } = this.props;
    return init === INIT.left ? 'row' : 'row-reverse';
  };
  render() {
    const init = this.getInit();
    const { icon, title, text, style } = this.props;
    return (
      <div>
        <div className="wui-timeline-container" style={{ flexDirection: init }}>
          <span>
            <strong>{title}</strong>
          </span>
          <span className="wui-timeline-container-hr">
            <hr />
          </span>
          <span>
            <i className={icon} style={style} />
          </span>
        </div>
        <div className="wui-timeline-container" style={{ flexDirection: init }}>
          <div>{text}</div>
        </div>​
      </div>
    );
  }
}
TimeLine.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  style: PropTypes.object,
};

TimeLine.defaultProps = {
  style: {},
};

export default TimeLine;
