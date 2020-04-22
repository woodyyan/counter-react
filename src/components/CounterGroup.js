import React, { Component } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import { Input, Row } from 'antd';
import {
  COUNTER_GROUP_INIT_COUNT,
  COUNTER_GROUP_INIT_SUM,
} from "../constants/constants";

class CounterGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: COUNTER_GROUP_INIT_COUNT,
      sum: COUNTER_GROUP_INIT_SUM,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCalculate = this.onCalculate.bind(this);
  }

  onChange(event) {
    this.setState({ number: event.target.value, sum: COUNTER_GROUP_INIT_SUM });
  }

  onSubmit(event) {
    event.preventDefault();
  }

  onCalculate(variation) {
    this.setState((prevState) => {
      return {
        sum: prevState.sum + variation,
      };
    });
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
            <Input
              name="number"
              placeholder="input number here..."
              onChange={this.onChange}
              value={this.state.number}
            />
            <span> Counters</span>
            <p>
              sum of all counters value is <mark>{this.state.sum}</mark>
            </p>
          </fieldset>
        </form>
        {countOfCounters.map((value) => (
          <Row>
            <Counter
              key={value}
              number={this.state.number}
              onCalculate={this.onCalculate}
            />
          </Row>
        ))}
      </div>
    );
  }
}

CounterGroup.propTypes = {
  size: PropTypes.number,
};

CounterGroup.defaultProps = {
  size: COUNTER_GROUP_INIT_COUNT,
};

export default CounterGroup;
