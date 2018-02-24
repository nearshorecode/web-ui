import React from 'react';
import ReactDOM from 'react-dom';

import transitionable from '../transitionable';
import Bouncer from '../Bouncer';

import { mount } from 'enzyme';

const FADE_TRANSITION = {
  idle: {
    opacity: 1,
  },

  enter: {
    opacity: 0,
  },

  exit: {
    opacity: 0,
  },
};

const Transitionable = transitionable(FADE_TRANSITION, 1000)(Bouncer);

describe('transitionable High Order Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Transitionable />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should start on phase 0', () => {
    let wrapper = mount(<Transitionable />);

    let hoc = wrapper.instance();

    expect(hoc.state.phase).toBe(0);
  });

  it('Can change phases on phases', () => {
    let wrapper = mount(<Transitionable />);

    let hoc = wrapper.instance();
    hoc.startNextPhase();

    expect(hoc.state.phase).toBe(1);
  });

  it('Cannot pass more than 3 transition phases', () => {
    let wrapper = mount(<Transitionable />);

    let hoc = wrapper.instance();

    for (let i = 0; i < 4; i++) {
      hoc.endTransition();
    }

    expect(hoc.state.phase).toBe(3);
  });
});
