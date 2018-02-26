import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card';

import { mount } from 'enzyme';

const PASSED_PROPS = {
  roundness: '25%',
  alignment: 'bottom',
  text: 'Hi!',
  onClick: jest.fn(),
};

const STYLE = {
  backgroundColor: '#2F7FB9',
};

const SIZE = {
  width: '225px',
  height: '225px',
};

describe('Card Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card {...PASSED_PROPS} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('contains only one child tag', () => {
    const wrapper = mount(<Card {...PASSED_PROPS} />);
    expect(wrapper.find('.Card').children().length).toBe(1);
  });

  it('contains only an element for content', () => {
    const wrapper = mount(<Card {...PASSED_PROPS} />);
    expect(wrapper.find('.content').length).toBe(1);
  });

  it('should render with default props', () => {
    const wrapper = mount(<Card />);
    const props = wrapper.find('.Card').props();
    expect(props.style.borderRadius).toBe('0');
    expect(props.style.backgroundColor).toBe('black');
    expect(props.style.width).toBe('250px');
    expect(props.style.height).toBe('250px');
  });

  it('should render child with default props', () => {
    const wrapper = mount(<Card />);
    const props = wrapper.find('.content').props();
    expect(props.style.verticalAlign).toBe('middle');
  });

  it('should add style prop when passed', () => {
    const wrapper = mount(<Card style={STYLE} />);
    const props = wrapper.find('.Card').props();
    expect(props.style.backgroundColor).toBe(`${STYLE.backgroundColor}`);
  });

  it('should add style prop to child when passed', () => {
    const wrapper = mount(<Card {...PASSED_PROPS} />);
    const props = wrapper.find('.content').props();
    expect(props.style.verticalAlign).toBe(`${PASSED_PROPS.alignment}`);
  });

  it('should override bgColor, width and height if style and size props are present', () => {
    const wrapper = mount(<Card style={STYLE} size={SIZE} />);
    const props = wrapper.find('.Card').props();
    expect(props.style.backgroundColor).toBe(`${STYLE.backgroundColor}`);
    expect(props.style.width).toBe(`${SIZE.width}`);
    expect(props.style.height).toBe(`${SIZE.height}`);
  });

  it('should call alert as a default handler if onClick prop is not present', () => {
    window.alert = jest.fn();
    const wrapper = mount(<Card />);
    wrapper.find('.Card').simulate('click');
    expect(window.alert).toHaveBeenCalled();
  });

  it('should call handler onClick passed as prop', () => {
    const wrapper = mount(<Card onClick={PASSED_PROPS.onClick} />);
    wrapper.find('.Card').simulate('click');
    wrapper.find('.Card').simulate('click');
    expect(PASSED_PROPS.onClick.mock.calls.length).toBe(2);
  });
});
