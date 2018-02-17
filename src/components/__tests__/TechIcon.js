import React from 'react';
import ReactDOM from 'react-dom';
import TechIcon from '../TechIcon';

import { mount } from 'enzyme';

const DEFAULT_PROPS = {
  name: 'android',
  width:'78px', 
  height:'78px'
};

const IMAGE_PATH = './assets/tech-icons/';

describe('Icon Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TechIcon  {...DEFAULT_PROPS}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('contains only two children tag', () => {
    const wrapper = mount(<TechIcon {...DEFAULT_PROPS}/>);

    const props = wrapper.find('img').props();

     expect(props.src).toBe(`${IMAGE_PATH}${DEFAULT_PROPS.name}.png`);
     expect(props.alt).toBe(`${IMAGE_PATH}${DEFAULT_PROPS.name}.png`);
  })
  
  it('contains only one img', () => {
    const wrapper = mount(<TechIcon {...DEFAULT_PROPS}/>);

    expect(wrapper.find('img').length).toBe(1);
    
  })
});
