import React from 'react';
import ReactDOM from 'react-dom';
import TechIconList, { FLOWS } from '../TechIconList';
import TechIcon from '../TechIcon';
import { mount } from 'enzyme';

const DEFAULT_PROPS = {
  icons: [{ name: 'android', width: '78px', height: '78px' }, { name: 'react', width: '78px', height: '78px' }],
  flow: 'horizontal',
};
const STYLE_PROPS = {
  icons: [{ name: 'android', width: '18px', height: '78px', style: { padding: '50px' } }],
};
describe('Icon Component', () => {
  it('export flow constants', () => {
    expect(FLOWS).toBeDefined();

    expect(FLOWS).toEqual({
      vertical: 'vertical',
      horizontal: 'horizontal',
    });
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TechIconList {...DEFAULT_PROPS} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render children', () => {
    const wrapper = mount(<TechIconList {...DEFAULT_PROPS} />);
    const children = wrapper.find(TechIconList).find(TechIcon);
    expect(children.length).toBe(2);
  });

  it('Should add style prop when passed', () => {
    const wrapper = mount(<TechIconList {...STYLE_PROPS} />);
    const props = wrapper.find('img').props();
    expect(props.style.padding).toBe(`${STYLE_PROPS.icons[0].style.padding}`);
  });

  it('Should add style prop when passed', () => {
    const wrapper = mount(<TechIconList icons={[]} flow={FLOWS.vertical} />);
    const props = wrapper.find('.wui-tech-icon-list').props();

    expect(props.style.flexDirection).toBe('column');
  });
});
