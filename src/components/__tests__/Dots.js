import React from 'react';
import ReactDOM from 'react-dom';
import Dots from '../Dots';
import Dot from '../Dot';
import { mount } from 'enzyme';

const QUANTITY = 2;
const ONCLICK = () => {};
const PASSED_PROPS = {
  id: 1,
  onClick: jest.fn(),
};
describe('Dots Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dots dotClick={ONCLICK} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('checks quantity', () => {
    const wrapper = mount(<Dots quantity={QUANTITY} dotClick={ONCLICK} />);
    expect(wrapper.find(Dot).length).toBe(2);
  });

  it('should call handler passed as prop', () => {
    const wrapper = mount(<Dots index={1} onDotClick={PASSED_PROPS.onClick} quantity={1} />);
    wrapper.find(Dot).simulate('click');
    wrapper.find(Dot).simulate('click');
    wrapper.find(Dot).simulate('click');
    expect(PASSED_PROPS.onClick).toBeCalled();
    expect(PASSED_PROPS.onClick.mock.calls.length).toBe(3);
  });

  it('should call nothing when no handler is passed', () => {
    const wrapper = mount(<Dots {...PASSED_PROPS} />);
    wrapper.find(Dots).simulate('click');
    expect(jest.fn()).not.toBeCalled();
  });
});
