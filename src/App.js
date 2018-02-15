import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { ImageTag } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ImageTag imageSrc={logo} tag="This is a test tag" size={{width: '250px', height: '250px'}}/>
      </div>
    );
  }
}

export default App;
