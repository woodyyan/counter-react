import React, { Component } from "react";
import PropTypes from "prop-types";
import uniqid from "uniqid";
import Counter from "./Counter";

class CounterGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    this.setState({ number: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
  }

  initArray(number) {
    let size = this.props.size;
    if (number.length > 0) {
      size = parseInt(number);
    }
    return Array.from(Array(size).keys());
  }

  render() {
    let countOfCounters = this.initArray(this.state.number);

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <label htmlFor="number">Generate </label>
            <input
              name="number"
              placeholder="input number here..."
              onChange={this.onChange}
              value={this.state.size}
            />
            <span> Counters</span>
          </fieldset>
        </form>
        {countOfCounters.map(() => (
          <Counter key={uniqid()} />
        ))}
      </div>
    );
  }
}

CounterGroup.propTypes = {
  size: PropTypes.number.isRequired,
};

export default CounterGroup;
