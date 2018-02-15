import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ImageTag from '../components/ImageTag'
import './css/index.css'

import logo from '../logo.svg'

storiesOf('ImageTag', module)
  .add('Default', () => (
    <div className="container">
      <ImageTag imageSrc={logo} tag="This is a test tag" size={{width: '250px', height: '250px'}}/>
    </div>
  ))

  .add('Remote Url', () => (
    <div className="container">
      <ImageTag imageSrc="http://www.nearshorecode.com/_include/img/profile/nearshore-code.png" 
        tag="This is a test tag for remote image" 
        size={{width: '250px', height: '250px'}}/>
    </div>
  ))
