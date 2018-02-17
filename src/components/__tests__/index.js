import * as Components from '../';

import * as ImageTag from '../ImageTag';

const expectedComponents = {
  ImageTag: ImageTag.default,
};

describe('Animators Section', () => {
  it('exports selected components', () => {
    expect(Components).toEqual(expectedComponents);
  });
});
