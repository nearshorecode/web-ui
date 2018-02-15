import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module)
  .add('blue', () => (
    <button style={{backgroundColor: 'blue', color: 'white'}} >Colored Button</button>
  ))

storiesOf('Input', module)
  .add('file', () => (
    <div>
    <label>Select a file:</label>
    <input type="file" style={{color: 'purple'}} />
    </div>
  ))
