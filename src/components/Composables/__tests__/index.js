import * as Components from '../';

import * as scrollable from '../scrollable';
import * as transitionable from '../transitionable';

const expectedComponents = {
  scrollable: scrollable.default,
  transitionable: transitionable.default,
};

describe('Animators Section', () => {
  it('exports selected components', () => {
    expect(Components).toEqual(expectedComponents);
  });
});
