import React from 'react';
import ReactDOM from 'react-dom';

import scrollable from '../scrollable';

import { mount } from 'enzyme';

const Scrollable = scrollable(
  class Test extends React.Component {
    render() {
      return (
        <div>
          <div style={{ height: '500px' }} />
          <div style={{ height: '500px' }} />
        </div>
      );
    }
  }
);

describe('scrollable High Order Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Scrollable />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render children', () => {
    let wrapper = mount(<Scrollable />);

    let hoc = wrapper.instance();

    expect(hoc.children.length).toBe(2);
    expect(hoc.target).toBe(undefined);
  });

  it('Can change children on scroll', () => {
    let onScrollChange = jest.fn();
    let wrapper = mount(<Scrollable onChildrenChange={onScrollChange} />);

    let hoc = wrapper.instance();
    hoc.handleScroll({
      target: hoc,
      scrollTop: 510,
    });

    expect(onScrollChange).toHaveBeenCalled();
    expect(onScrollChange).toHaveBeenCalledWith({ clientHeight: 0, offsetTop: 0 }, 0, 0);
    expect(hoc.target).toEqual({ clientHeight: 0, offsetTop: 0 });
  });
});
