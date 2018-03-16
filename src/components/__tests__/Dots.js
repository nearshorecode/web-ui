import React from 'react';
import ReactDOM from 'react-dom';
import Dots from '../Dots';
import Dot from '../Dot';
import { mount } from 'enzyme';

const QUANTITY = 2;
const ONCLICK = () => {};

const DOTS = [{ id: 1, onClick: () => {} }, { id: 1, onClick: () => {} }];

describe('Dots Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dots dots={DOTS} dotClick={ONCLICK} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('checks quantity', () => {
    const wrapper = mount(<Dots dots={DOTS} quantity={QUANTITY} dotClick={ONCLICK} />);
    expect(wrapper.find(Dot).length).toBe(2);
  });
});
