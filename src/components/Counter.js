import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 10,
    };
  }

  render() {
    return (
      <section>
        <button>+</button>
        <mark>{this.state.number}</mark>
        <button>-</button>
      </section>
    );
  }
}

export default Counter;
