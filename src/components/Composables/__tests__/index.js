import * as Components from '../';

import * as scrollable from '../scrollable';

const expectedComponents = {
  scrollable: scrollable.default,
};

describe('Animators Section', () => {
  it('exports selected components', () => {
    expect(Components).toEqual(expectedComponents);
  });
});
