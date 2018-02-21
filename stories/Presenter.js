import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Presenter from '../src/components/Presenter'

const items  = [
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
  {
    image: 'https://ew1rnkpr0125002.blob.core.windows.net/media/MeccaBingo/SlotsAndGames/Thumbnail/george-and-the-dragon-large.png',
    text: 'Example Test 4',
  },
  {
    image: 'https://en1rnkpr0125002.blob.core.windows.net/media/MeccaBingo/sidegames/4-3-Image---500x375-22.jpg',
    text: 'Example Test 5',
  },
]

const TransitionVerticalSlide = {
  enter: {
    opacity: 0,
    top: '-200%',
    bottom: '100%',
  },
  normal: {
    opacity: 1,
    top: 0,
    bottom: 0,
  },
  left: {
    opacity: 0,
    top: '100%',
    bottom: '-200%',
  }
}

const TransitionRotate = {
  enter: {
    opacity: 0,
    transform: 'rotate(360deg)',
  },
  normal: {
    opacity: 1,
    transform: 'rotate(0deg)',
  },
  left: {
    opacity: 0,
    transform: 'rotate(-360deg)',
  }
}

const TransitionWhatever = {
  enter: {
    opacity: 0,
    top: '-150%',
    bottom: '-150%',
  },
  normal: {
    opacity: 1,
    top: 0,
    bottom: 0,
    transform: 'rotate(0deg)',
  },
  left: {
    opacity: 0,
    transform: 'rotate(-360deg)',
    left: '-150%',
    right: '-150%',
  }
}

export default function createStories() {
  return storiesOf('Presenter', module)
    .add('Default',
      withInfo({ text: 'WIP: Presenter default' })(
        () => (
          <Presenter items={items} />
        )
      )
    )

    .add('Example Rotation',
      withInfo({ text: 'WIP: Rotation' })(
        () => (
          <Presenter 
            transitions={ TransitionRotate }
            items={items} />
        )
      )
    )

    .add('Example Vertical Slide',
      withInfo({ text: 'WIP: Vertical Slide Animation' })(
        () => (
          <Presenter 
            transitions={ TransitionVerticalSlide }
            items={items} />
        )
      )
    )

    .add('Example Mixed Transitions',
      withInfo({ text: 'WIP: Mixed Animation' })(
        () => (
          <Presenter 
            transitions={ TransitionWhatever }
            items={items}
          />
        )
      )
    )

    .add('Example with Right bar',
      withInfo({ text: 'WIP: Mixed Animation' })(
        () => (
          <Presenter 
            transitions={ TransitionWhatever }
            items={items}
            rightBar={<button>Right Bar button</button>}
          />
        )
      )
    )
}
