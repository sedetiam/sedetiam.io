import React, { Component } from "react";
import css from "./Hello.module.css";

class Hello extends Component {
  render() {
    return (
      <section className={css.container}>
        <header>
          <h1 className={css.hello}>Hello :)</h1>
        </header>

        <p>
          my name is Cristian Marletta<br />
          I am a software engineer and this is my portfolio<br />
          Here you can find some of my works &#10084;
        </p>
      </section>
    );
  }
}

export default Hello;
