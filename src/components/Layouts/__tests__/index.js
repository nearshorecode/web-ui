import * as Layouts from '../';

import * as Stack from '../Stack';

const expectedLayouts = {
  Stack: Stack.default,
  STACK_ORIENTATIONS: Stack.ORIENTATION,
};

describe('Animators Section', () => {
  it('exports selected components', () => {
    expect(Layouts).toEqual(expectedLayouts);
  });
});
