import React from 'react';
import ReactDOM from 'react-dom';
import Icon from '../../Icon';
import { mount } from 'enzyme';


const DEFAULT_PROPS = {
  imageSrc: '../../../images/android.png',
  width:'78px', 
  height:'78px'
};

describe('Icon Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Icon  {...DEFAULT_PROPS}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('contains only two children tag', () => {
    const wrapper = mount(<Icon {...DEFAULT_PROPS}/>);
     expect(wrapper.find('.Icon').children().length).toBe(1);
  })
  it('contains only one img', () => {
    const wrapper = mount(<Icon {...DEFAULT_PROPS}/>);

    expect(wrapper.find('img').length).toBe(1);
    
  })
  it('should render children', () => {
    const wrapper = mount(
      <Icon {...DEFAULT_PROPS}>
        <div/>
        <span/>
      </Icon>
    );
    const children = wrapper.find(Icon).props().children;
    expect(children.length).toBe(2);
    expect(children[0].type).toBe('div');
    expect(children[1].type).toBe('span');
  })
});
