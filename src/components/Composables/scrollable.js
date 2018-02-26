import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

const scrollable = WrappedComponent =>
  class extends Component {
    static displayName = `Scrollable(${WrappedComponent.displayName || WrappedComponent.name})`;

    componentDidMount() {
      const component = findDOMNode(this.node);

      this.children = [...component.children].map(x => ({
        offsetTop: x.offsetTop,
        clientHeight: x.clientHeight,
      }));
    }

    handleScroll = event => {
      const { scrollTop: scrollValue } = findDOMNode(event.target);

      const target = this.children.find(
        ({ offsetTop, clientHeight }) => scrollValue >= offsetTop && scrollValue <= offsetTop + clientHeight
      );

      if (target && target !== this.target) {
        const idx = this.children.findIndex(x => x === target);

        this.props.onChildrenChange(this.children[idx], idx, scrollValue);

        this.target = target;
      }
    };

    render() {
      const { height } = this.props;

      return (
        <div style={{ overflowY: 'scroll', height }} onScroll={this.handleScroll}>
          <WrappedComponent ref={x => (this.node = x)} />
        </div>
      );
    }
  };

export default scrollable;
