import React from 'react';
import ReactDOM from 'react-dom';
import Dot from '../Dot';
import '../Dot.css';
import { mount } from 'enzyme';

const PASSED_PROPS = {
  id: 1,
  onClick: jest.fn(),
};

describe('Dot Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dot {...PASSED_PROPS} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it(' can change the class name when active', () => {
    const wrapper = mount(<Dot {...PASSED_PROPS} active={true} />);
    const props = wrapper.find('.wui-dot').props();
    expect(props.className).toEqual('wui-dot wui-dot-active');
  });
  it(' can change the class name when inactive', () => {
    const wrapper = mount(<Dot {...PASSED_PROPS} active={false} />);
    const props = wrapper.find('.wui-dot').props();
    expect(props.className).toEqual('wui-dot');
  });

  it('should call handler passed as prop', () => {
    const wrapper = mount(<Dot {...PASSED_PROPS} />);
    wrapper.find('.wui-dot').simulate('click');
    wrapper.find('.wui-dot').simulate('click');
    wrapper.find('.wui-dot').simulate('click');

    expect(PASSED_PROPS.onClick.mock.calls.length).toBe(3);
  });

  it('should call nothing when no handler is passed', () => {
    const wrapper = mount(<Dot id={1} />);
    wrapper.find('.wui-dot').simulate('click');
    expect(jest.fn()).not.toBeCalled();
  });
});
