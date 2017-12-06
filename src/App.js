import React, { Component } from 'react';

import Hello from './components/Hello/Hello.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
//modules
import style from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <Hello />
        <Portfolio />
      </div>
    );
  }
}

export default App;
