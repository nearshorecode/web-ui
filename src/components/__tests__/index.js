import * as Components from '../';

import * as ImageTag from '../ImageTag';
import * as TechIcon from '../TechIcon';
import * as TechIconList from '../TechIconList';

const expectedComponents = {
  ImageTag: ImageTag.default,
  TechIcon: TechIcon.default,
  TechIconList: TechIconList.default,
  TECH_ICONS_LIST_FLOWS: TechIconList.FLOWS,
};

describe('Animators Section', () => {
  it('exports selected components', () => {
    expect(Components).toEqual(expectedComponents);
  });
});
