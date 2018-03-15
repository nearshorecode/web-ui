import React from 'react';
import ReactDOM from 'react-dom';
import TimeLineText from '../TimeLineText';
import { mount } from 'enzyme';
const DEFAULT_PROPS = {
  title: 'OPORTUNIDADES ILIMITADAS',
  text:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.' +
    'Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' +
    'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
  init: 'right',
};

describe('TimeLineText Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TimeLineText {...DEFAULT_PROPS} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Should add style prop when passed', () => {
    const wrapper = mount(<TimeLineText {...DEFAULT_PROPS} style={{ fontSize: '30px' }} />);
    const props = wrapper.props();
    expect(props.style.fontSize).toBe(`30px`);
  });
  it('Should provide default init when mount', () => {
    const wrapper = mount(<TimeLineText text={DEFAULT_PROPS.text} />);
    const props = wrapper.props();
    expect(props.init).toBe(`left`);
  });
  it('Should override init prop when passed', () => {
    const wrapper = mount(<TimeLineText {...DEFAULT_PROPS} />);
    const props = wrapper.props();
    expect(props.init).toBe(`right`);
  });
});
