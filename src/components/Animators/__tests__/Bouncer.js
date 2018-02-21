import React from 'react';
import ReactDOM from 'react-dom';

import Bouncer from '../Bouncer';

import { mount } from 'enzyme';

describe('ImageTag Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Bouncer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render with children', () => {
    const children = <span>Bouncer</span>;

    const wrapper = mount(<Bouncer>{children}</Bouncer>);

    const domNode = wrapper.find(Bouncer).getDOMNode();

    expect(domNode.className).toBe('wui-bouncer');
    expect(wrapper.find(Bouncer).props().children).toBe(children);
  });
});
