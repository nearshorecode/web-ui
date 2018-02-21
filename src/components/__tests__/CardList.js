import React from 'react';
import ReactDOM from 'react-dom';

import CardList from '../CardList';
import Card from '../Card';

import { mount } from 'enzyme';

describe('Card Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render children', () => {
    const wrapper = mount(
      <CardList>
        <Card />
      </CardList>
    );
    const children = wrapper.find(CardList).find(Card);
    expect(children.length).toBe(1);
  });
});
