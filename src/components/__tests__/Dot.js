import React from 'react';
import ReactDOM from 'react-dom';
import Dot from '../Dot';
import '../Dot.css';
import { mount } from 'enzyme';

describe('Dot Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dot />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it(' can change the class name when active', () => {
    const wrapper = mount(<Dot active={true} />);
    const props = wrapper.find('.wui-dot').props();
    expect(props.className).toEqual('wui-dot wui-dot-active');
  });
  it(' can change the class name when inactive', () => {
    const wrapper = mount(<Dot active={false} />);
    const props = wrapper.find('.wui-dot').props();
    expect(props.className).toEqual('wui-dot');
  });
});
