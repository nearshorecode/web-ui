import * as Animators from '../';

import * as Bouncer from '../Bouncer';

const expectedAnimators = {
  Bouncer: Bouncer.default,
};

describe('Animators Section', () => {
  it('exports selected components', () => {
    expect(Animators).toEqual(expectedAnimators);
  });
});
