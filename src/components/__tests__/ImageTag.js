import React from 'react';
import ReactDOM from 'react-dom';

import ImageTag from '../ImageTag';

import { mount } from 'enzyme';

const DEFAULT_PROPS = {
  imageSrc: 'anImagePath',
  tag: 'This is a tag',
};

describe('ImageTag Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ImageTag {...DEFAULT_PROPS} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('contains only two children tag', () => {
    const wrapper = mount(<ImageTag {...DEFAULT_PROPS} />);

    expect(wrapper.find('.wui-image-tag').children().length).toBe(2);
  });

  it('contains only one img & span tag ', () => {
    const wrapper = mount(<ImageTag {...DEFAULT_PROPS} />);

    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('span').length).toBe(1);
  });
});
