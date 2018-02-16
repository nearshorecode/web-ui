import React from 'react';
import ReactDOM from 'react-dom';
import IconList from '../../IconList';
import { mount } from 'enzyme';


const DEFAULT_PROPS = {
  images: [
    {imgSrc:'../../../images/android.png', width:'78px', height: '78px'},
    {imgSrc:'../../../images/react.png', width:'78px', height: '78px'}
  ],
  flow: 'horizontal'
};

describe('Icon Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IconList  {...DEFAULT_PROPS}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
 
  it('should render children', () => {
    const wrapper = mount(
      <IconList {...DEFAULT_PROPS}>
        <div/>
        <span/>
      </IconList>
    );
    const children = wrapper.find(IconList).props().children;
    expect(children.length).toBe(2);
    expect(children[0].type).toBe('div');
    expect(children[1].type).toBe('span');
  })
});
