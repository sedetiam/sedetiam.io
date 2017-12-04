import React, { Component } from 'react';
import css from './Hello.module.css';

class Hello extends Component {
  render() {
    return (
      <article className={css.container}>
        <header>
          <h1 className={css.hello}>Hello :)</h1>
        </header>
        <p className={css.presentation}>
          my name is Cristian Marletta<br />
          I am a software engineer and this is my portfolio<br />
          Here you can find some of my works &#10084;
        </p>
      </article>
    );
  }
}

export default Hello;
