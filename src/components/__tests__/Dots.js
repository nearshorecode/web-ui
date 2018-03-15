import React from 'react';
import ReactDOM from 'react-dom';
import Dots from '../Dots';
import { mount } from 'enzyme';

describe('Dots Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dots />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
