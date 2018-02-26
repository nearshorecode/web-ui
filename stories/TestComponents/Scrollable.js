import React from 'react';
import { scrollable } from '../../src/components/Composables';

import { ImageTag } from '../../src/components';

import { Stack } from '../../src/components/Layouts';

import react from '../../src/components/assets/tech-icons/react.png';

const WithScroll = scrollable(
  class Stacks extends React.Component {
    render() {
      return (
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
      );
    }
  }
);

export default class Scrollable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  handleChildrenChange = (data, idx, scrollValue) => {
    this.setState({
      data: {
        data,
        idx,
        scrollValue,
      },
    });
  };

  render() {
    return (
      <div>
        <span style={{ position: 'sticky' }}>{JSON.stringify(this.state)}</span>
        <WithScroll height="350px" onChildrenChange={this.handleChildrenChange} />
      </div>
    );
  }
}
