import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { Card, CardList, ImageTag, TechIcon, TechIconList } from '../src/components';

import { Bouncer } from '../src/components/Animators';

import { Stack } from '../src/components/Layouts';

import Scrollable from './TestComponents/Scrollable';

import './css/index.css';

import react from '../src/components/assets/tech-icons/react.png';

addDecorator(story => <div className="container">{story()}</div>);

storiesOf('Web UI Components', module)
  .add(
    'Image Tag',
    withInfo({ text: 'ImageTag renders an Image along with its Tag name' })(() => (
      <ImageTag imageSrc={react} tag="This is a test tag" size={{ width: '250px', height: '250px' }} />
    ))
  )

  .add(
    'Image Tag Remote Url',
    withInfo({ text: 'ImageTag renders an Image along with its Tag name by using a remote url for images' })(() => (
      <ImageTag
        imageSrc="https://www.w3schools.com/jsref/img_pulpit.jpg"
        tag="This is a test tag for remote image"
        size={{ width: '250px', height: '250px' }}
      />
    ))
  )

  .add(
    'Tech Icon',
    withInfo({ text: 'ImageTag renders an Image along with its Tag name by using a remote url for images' })(() => (
      <TechIcon name="react" />
    ))
  )

  .add(
    'Tech Icon List',
    withInfo({ text: 'ImageTag renders an Image along with its Tag name by using a remote url for images' })(() => (
      <TechIconList icons={[{ name: 'react' }, { name: 'redux' }, { name: 'mongodb' }]} />
    ))
  )

  .add(
    'Card',
    withInfo({ text: 'Card renders a Card ...' })(() => (
      <Card roundness="50%" alignment="top" style={{ backgroundColor: '#2F7FB9' }} text="APPLICATION DEVELOPMENT" />
    ))
  )

  .add(
    'CardList',
    withInfo({ text: 'CardList renders a list of Cards ...' })(() => (
      <CardList>
        <Card alignment="top" style={{ backgroundColor: '#2F7FB9' }} text="APPLICATION DEVELOPMENT" />

        <Card
          roundness="25%"
          style={{ width: '200px', height: '200px', backgroundColor: '#1B9B82' }}
          text="APPLICATION MAINTENANCE"
          onClick={() => {
            alert('Ouch!');
          }}
        />

        <Card roundness="50%" alignment="bottom" text="UX DESIGN" />
      </CardList>
    ))
  );

storiesOf('Animators', module)
  .add(
    'Bouncer',
    withInfo({ text: 'Bounce a component' })(() => (
      <Bouncer>
        <ImageTag imageSrc={react} tag="This is a test tag" size={{ width: '50px', height: '50px' }} />
      </Bouncer>
    ))
  )

  .add('Bouncer with component', withInfo({ text: 'Bounce a text' })(() => <Bouncer>Bounce this!</Bouncer>));

storiesOf('Layouts', module).add(
  'Stack',
  withInfo({ text: 'Bounce a component' })(() => (
    <Stack>
      <div style={{ height: '250px' }}>
        <ImageTag imageSrc={react} tag="This is a test tag" size={{ width: '50px', height: '50px' }} />
      </div>
      <div style={{ height: '250px', background: 'rgb(100, 150, 250)' }}>
        <ImageTag imageSrc={react} tag="This is a test tag" size={{ width: '50px', height: '50px' }} />
      </div>
      <div style={{ height: '2450px', background: 'rgb(56, 50, 150)' }}>
        <ImageTag imageSrc={react} tag="This is a test tag" size={{ width: '50px', height: '50px' }} />
      </div>
      <div style={{ height: '550px', background: 'rgb(120, 140, 50)' }}>
        <ImageTag imageSrc={react} tag="This is a test tag" size={{ width: '50px', height: '50px' }} />
      </div>
    </Stack>
  ))
);

storiesOf('High Order Components', module).add(
  'Scrollable',
  withInfo({ text: 'Scrollable High Order Component' })(() => <Scrollable />)
);
