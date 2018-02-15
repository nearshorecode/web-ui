import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

function loadStories() {
  require('../../src/stories/index.js');
}

// addon-info
setDefaults({
  header: false, 
  inline: true,
  maxPropsIntoLine: 1,
  maxPropStringLength: 200,
});


configure(loadStories, module);

export default loadStories
