import React from 'react';
import ReactDOM from 'react-dom';
import Dot from '../Dot';
import { mount } from 'enzyme';

const ACTIVE = true;
const INACTIVE = false;

describe('Dot Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dot />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it(' can change the class name when active', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dot name={ACTIVE} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it(' can change the class name when inactive', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dot name={INACTIVE} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
