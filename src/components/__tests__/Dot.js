import React from 'react';
import ReactDOM from 'react-dom';
import Dot from '../Dot';
import { mount } from 'enzyme';

describe('Dot Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dot />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
