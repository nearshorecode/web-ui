import React from 'react';
import ReactDOM from 'react-dom';

import Stack, { ORIENTATION } from '../Stack';

import { mount } from 'enzyme';

const DEFAULT_PROPS = {
  orientation: 'horizontal',
};

describe('ImageTag Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Stack />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have orientation property', () => {
    expect(ORIENTATION).toBeDefined();

    expect(ORIENTATION).toEqual({
      vertical: 'vertical',
      horizontal: 'horizontal',
    });
  });

  it('should render with default props', () => {
    const wrapper = mount(<Stack />);

    expect(wrapper.find(Stack).props().orientation).toBe('vertical');
    expect(wrapper.find(Stack).children().length).toBe(1);
  });

  it('should render with props', () => {
    const wrapper = mount(<Stack {...DEFAULT_PROPS} />);

    expect(wrapper.find(Stack).props().orientation).toBe('horizontal');
    expect(wrapper.find(Stack).children().length).toBe(1);
  });

  it('should render children', () => {
    const wrapper = mount(
      <Stack>
        <div />
        <span />
      </Stack>
    );

    const children = wrapper.find(Stack).props().children;

    expect(children.length).toBe(2);
    expect(children[0].type).toBe('div');
    expect(children[1].type).toBe('span');
  });
});
