import React from 'react';
import ReactDOM from 'react-dom';
import TechIconList from '../TechIconList';
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
});
