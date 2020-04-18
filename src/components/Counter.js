import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);

    this.state = {
      number: 10,
    };
  }

  onIncrease() {
    this.setState((prevState) => ({ number: prevState.number + 1 }));
  }

  onDecrease() {
    this.setState((prevState) => ({ number: prevState.number - 1 }));
  }

  render() {
    return (
      <section>
        <button onClick={this.onIncrease}>+</button>
        <mark>{this.state.number}</mark>
        <button onClick={this.onDecrease}>-</button>
      </section>
    );
  }
}

export default Counter;
