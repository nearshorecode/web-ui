import React from 'react';
import ReactDOM from 'react-dom';
import TimeLine from '../TimeLine';
import { mount } from 'enzyme';
const DEFAULT_PROPS = {
  icon: 'fa fa-dot-circle-o',
  title: 'OPORTUNIDADES ILIMITADAS',
  text:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.' +
    'Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' +
    'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
  init: 'right',
};

describe('TimeLine Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TimeLine {...DEFAULT_PROPS} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should render children', () => {
    const wrapper = mount(
      <TimeLine {...DEFAULT_PROPS}>
        <div />
      </TimeLine>
    );
    const children = wrapper.find(TimeLine);
    expect(children.length).toBe(1);
  });
  it('Should add style prop when passed', () => {
    const wrapper = mount(<TimeLine {...DEFAULT_PROPS} style={{ fontSize: '30px' }} />);
    const props = wrapper.props();
    expect(props.style.fontSize).toBe(`30px`);
  });
  it('Should provide default init when mount', () => {
    const wrapper = mount(<TimeLine icon="fa fa-dot-circle-o" />);
    const props = wrapper.props();
    expect(props.init).toBe(`left`);
  });
  it('Should override init prop when passed', () => {
    const wrapper = mount(<TimeLine {...DEFAULT_PROPS} />);
    const props = wrapper.props();
    expect(props.init).toBe(`right`);
  });
});
