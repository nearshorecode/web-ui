import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { ImageTag, TechIcon, TechIconList } from '../components';

import { Bouncer } from '../components/Animators';

import { Stack } from '../components/Layouts';

import './css/index.css'

import angular from '../components/assets/tech-icons/angular.png';

addDecorator(story => (
  <div className="container">
    {story()}
  </div>
))

storiesOf('Web UI Components', module)
  .add('Image Tag', 
    withInfo({ text: 'ImageTag renders an Image along with its Tag name' })(
      () => (
        <ImageTag imageSrc={angular} tag="This is a test tag" size={{width: '250px', height: '250px'}}/>
      )
    )
  )

  .add('Image Tag Remote Url', 
    withInfo({ text: 'ImageTag renders an Image along with its Tag name by using a remote url for images' })(
      () => (
        <ImageTag imageSrc="https://www.w3schools.com/jsref/img_pulpit.jpg" 
          tag="This is a test tag for remote image" 
          size={{width: '250px', height: '250px'}}/>
      )
    )
  )

  .add('Tech Icon', 
    withInfo({ text: 'ImageTag renders an Image along with its Tag name by using a remote url for images' })(
      () => (
        <TechIcon name="react"/>
      )
    )
  )

  .add('Tech Icon List', 
    withInfo({ text: 'ImageTag renders an Image along with its Tag name by using a remote url for images' })(
      () => (
        <TechIconList icons={[{name: 'react'}, {name: 'redux'}, {name: 'mongodb'}]}/>
      )
    )
  )

storiesOf('Animators', module)
  .add('Bouncer', 
    withInfo({ text: 'Bounce a component' })(
      () => (
        <Bouncer>
          <ImageTag imageSrc={angular} tag="This is a test tag" size={{width: '50px', height: '50px'}}/>
        </Bouncer>
      )
    )
  )

  .add('Bouncer with component', 
    withInfo({ text: 'Bounce a text' })(
      () => (
        <Bouncer>
          Bounce this!
        </Bouncer>
      )
    )
  )

storiesOf('Layouts', module)
  .add('Stack', 
    withInfo({ text: 'Bounce a component' })(
      () => (
        <Stack>
          <div style={{height: '250px'}}>
            <ImageTag imageSrc={angular} tag="This is a test tag" size={{width: '50px', height: '50px'}}/>
          </div>
          <div style={{height: '250px', background: 'rgb(100, 150, 250)'}}>
            <ImageTag imageSrc={angular} tag="This is a test tag" size={{width: '50px', height: '50px'}}/>
          </div>
          <div style={{height: '2450px', background: 'rgb(56, 50, 150)'}}>
            <ImageTag imageSrc={angular} tag="This is a test tag" size={{width: '50px', height: '50px'}}/>
          </div>
          <div style={{height: '550px', background: 'rgb(120, 140, 50)'}}>
            <ImageTag imageSrc={angular} tag="This is a test tag" size={{width: '50px', height: '50px'}}/>
          </div>
        </Stack>
      )
    )
  )

