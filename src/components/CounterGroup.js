import React, { Component } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
const uniqid = require("uniqid");

class CounterGroup extends Component {
  render() {
    const size = this.props.size;
    const initValue = 0;
    const countOfCounters = new Array(size).fill(initValue);
    return (
      <div>
        <form>
          <fieldset>
            <label htmlFor="number">Generate </label>
            <input name="number" placeholder="input number here..." />
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
