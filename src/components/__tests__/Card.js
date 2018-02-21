import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card';

import { mount } from 'enzyme';

const DEFAULT_PROPS = {
  text: 'This is a Card',
};

describe('Card Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card  {...DEFAULT_PROPS}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('contains only one div child tag', () => {
    const wrapper = mount(<Card {...DEFAULT_PROPS} />);
    expect(wrapper.find('.Card').children().length).toBe(1);
  });
});
