import React from 'react';
import ReactDOM from 'react-dom';
import Dots from '../Dots';
import Dot from '../Dot';
import { mount } from 'enzyme';

const QUANTITY = 2;

describe('Dots Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dots />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('checks quantity', () => {
    const wrapper = mount(<Dots quantity={QUANTITY} />);
    expect(wrapper.find(Dot).length).toBe(2);
  });
});
