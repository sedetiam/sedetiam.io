import React, { Component } from 'react';
import style from './Hello.module.css';

class Hello extends Component {
  render() {
    return (
      <article className={style.container}>
        <header>
          <h1 className={style.hello}>Hello :)</h1>
        </header>
        <p className={style.presentation}>
          my name is Cristian Marletta<br />
          I am a software engineer and this is my portfolio<br />
          Here you can find some of my works &#10084;
        </p>
      </article>
    );
  }
}

export default Hello;
