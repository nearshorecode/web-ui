import * as Components from '../';

import * as ImageTag from '../ImageTag';
import * as TechIcon from '../TechIcon';
import * as TechIconList from '../TechIconList';
import * as Card from '../Card';
import * as CardList from '../CardList';
import * as Dot from '../Dot';
import * as Dots from '../Dots';
import * as TimeLineText from '../TimeLineText';

const expectedComponents = {
  Card: Card.default,
  CardList: CardList.default,
  Dot: Dot.default,
  Dots: Dots.default,
  TimeLineText: TimeLineText.default,
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
