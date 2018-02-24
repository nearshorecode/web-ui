import * as Animators from '../';

import * as Bouncer from '../Bouncer';
import * as transitionable from '../transitionable';

const expectedAnimators = {
  Bouncer: Bouncer.default,
  transitionable: transitionable.default,
};

describe('Animators Section', () => {
  it('exports selected components', () => {
    expect(Animators).toEqual(expectedAnimators);
  });
});
