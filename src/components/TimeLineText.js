import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './TimeLineText.css';

export const INIT = {
  left: 'left',
  right: 'right',
};

class TimeLineText extends PureComponent {
  getInit = () => {
    const { init } = this.props;
    return init === INIT.left ? 'row' : 'row-reverse';
  };
  render() {
    const init = this.getInit();
    const { title, text } = this.props;
    return (
      <div>
        <div className="wui-timeline-container" style={{ flexDirection: init }}>
          <span>
            <strong>{title}</strong>
          </span>
          <span className="wui-hr">
            <hr />
          </span>
        </div>
        <div className="wui-timeline-container" style={{ flexDirection: init }}>
          <div>{text}</div>
        </div>​
      </div>
    );
  }
}
TimeLineText.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  init: PropTypes.string,
  style: PropTypes.object,
};

TimeLineText.defaultProps = {
  init: 'left',
  style: {},
};

export default TimeLineText;
