import React, { Component } from 'react';

import { transitionable } from '../../src/components/Animators';

export const FADE_TRANSITION = {
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

class Fader extends Component {
  render() {
    return <span>SUPER ULTRA MEGA TEST FADER</span>;
  }
}

export default transitionable(FADE_TRANSITION, 1000)(Fader);
