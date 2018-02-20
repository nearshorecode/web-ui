import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card';

import { mount } from 'enzyme';

const DEFAULT_PROPS = {
  roundness: '50%',
  alignment: 'middle',
  text: 'This is a Card',
};

const STYLE = {
  width: "250px",
  height: "250px",
  'background-color': '#2F7FB9',
}; 

describe('Card Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card  {...DEFAULT_PROPS}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('contains only one div child tag', () => {
    const wrapper = mount(<Card {...DEFAULT_PROPS} />);
    const props = wrapper.find('div').props();
  })

  it('should add style prop when passed', () => {
    const wrapper = mount(<Card style={STYLE} />);
    const props = wrapper.find('div').props();
    expect(props.style.width).toBe(`${STYLE.width}`);
    expect(props.style.height).toBe(`${STYLE.height}`);
  })
});
