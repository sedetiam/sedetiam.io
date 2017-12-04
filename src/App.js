import React, { Component } from 'react';

import Hello from './components/Hello/Hello.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
//modules

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
        <Portfolio />
      </div>
    );
  }
}

export default App;
