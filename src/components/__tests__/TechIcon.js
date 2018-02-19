import React from 'react';
import ReactDOM from 'react-dom';
import TechIcon from '../TechIcon';

import { mount } from 'enzyme';

const DEFAULT_PROPS = {
  name: 'android',
};

const IMAGE_PATH = './assets/tech-icons/';
const padding = {
  padding: "20px",
}; 
const size = {
  width: "20px",
  height: "20px",
}; 

describe('Icon Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TechIcon  {...DEFAULT_PROPS}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('contains only one img child tag', () => {
    const wrapper = mount(<TechIcon name="android" style={padding} />);

    const props = wrapper.find('img').props();

     expect(props.src).toBe(`${DEFAULT_PROPS.name}.png`);
     expect(props.alt).toBe(`${IMAGE_PATH}${DEFAULT_PROPS.name}.png`);
  })
  
  it('Should add style prop when passed', () => {
    const wrapper = mount(<TechIcon name="android" style={padding} />);

    const props = wrapper.find('img').props();

     expect(props.src).toBe(`${DEFAULT_PROPS.name}.png`);
     expect(props.alt).toBe(`${IMAGE_PATH}${DEFAULT_PROPS.name}.png`);
     expect(props.style.padding).toBe(`${padding.padding}`);
  })

  it('should override style width and height if size and style props are present', () => {
    const wrapper = mount(<TechIcon name="android" style={padding} size={size}/>);

    const props = wrapper.find('img').props();

     expect(props.src).toBe(`${DEFAULT_PROPS.name}.png`);
     expect(props.alt).toBe(`${IMAGE_PATH}${DEFAULT_PROPS.name}.png`);
     expect(props.style.padding).toBe(`${padding.padding}`);
     expect(props.style.width).toBe(`${size.width}`);
     expect(props.style.height).toBe(`${size.height}`);
  })

  it('contains only one img', () => {
    const wrapper = mount(<TechIcon {...DEFAULT_PROPS}/>);

    expect(wrapper.find('img').length).toBe(1);
    
  })
});
