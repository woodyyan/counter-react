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
  }

  onChange(event) {
    this.setState({ number: event.target.value });
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
        <form>
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
