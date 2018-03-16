import React from 'react';
import ReactDOM from 'react-dom';
import Dots from '../Dots';
import { mount } from 'enzyme';

const QUANTITY = 2;

describe('Dots Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dots />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('checks quantity', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dots quantity={QUANTITY} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
