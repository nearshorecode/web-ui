import React from 'react';
import ReactDOM from 'react-dom';
import Presenter from '../Presenter';

import { mount } from 'enzyme';

const props = {
  items: [
    {
      image: 'https://en1rnkpr0125002.blob.core.windows.net/media/MeccaBingo/SlotsAndGames/Large/Reel-King-Potty-4-3.jpg',
      text: 'Example Text 1',
    },
    {
      image: 'https://ew1rnkpr0125002.blob.core.windows.net/media/MeccaBingo/sidegames/500x375_Fluffy_Favourites.jpg',
      text: 'Example Text 2',
    },
    {
      image: 'https://en1rnkpr0125002.blob.core.windows.net/media/MeccaBingo/SlotsAndGames/Large/enchanted-prince-4-3.jpg',
      text: 'Example Test 3',
    },
  ]
}


function setup(props) {
  return mount(<Presenter {...props} />)
}

describe('Presenter Component', () => {
  it('Should render Loading message', () => {
    const wrapper = setup(props)
    expect(wrapper.find('h1').length).toEqual(1)
  })
})

