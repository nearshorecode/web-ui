import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const TRANSITION_PHASES = {
  0: 'enter',
  1: 'idle',
  2: 'idle',
  3: 'exit',
};

const transitionable = (transition, time) => WrappedComponent =>
  class extends Component {
    static displayName = `Transitionable(${WrappedComponent.displayName || WrappedComponent.name})`;

    constructor(props) {
      super(props);

      this.state = {
        phase: 0,
        currentTransition: {
          ...transition[TRANSITION_PHASES[0]],
          transition: `${time}ms`,
        },
      };
    }

    componentDidMount() {
      setTimeout(this.startNextPhase, 0);
    }

    startNextPhase = () => {
      const { phase } = this.state;

      if (phase === 3) {
        return;
      }

      const nextPhase = phase + 1;

      this.setState({
        phase: nextPhase,
        currentTransition: transition[TRANSITION_PHASES[nextPhase]],
      });

      setTimeout(this.endTransition, time);
    };

    endTransition = () => {
      this.startNextPhase();
    };

    render() {
      const { currentTransition } = this.state;

      return (
        <div style={{ ...currentTransition, transition: `${time}ms` }}>
          <WrappedComponent />
        </div>
      );
    }
  };

export default transitionable;
