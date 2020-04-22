import React, { Component } from "react";
import { Button,Space } from 'antd';
import {
  COUNTER_INIT_VALUE,
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
} from "../constants/constants";
import 'antd/dist/antd.css'; 

class Counter extends Component {
  constructor(props) {
    super(props);

    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);

    this.state = {
      value: COUNTER_INIT_VALUE,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.number !== this.props.number) {
      this.setState({ value: COUNTER_INIT_VALUE });
    }
    if (this.state.value > prevState.value) {
      this.props.onCalculate(COUNTER_INCREMENT);
    } else if (this.state.value < prevState.value) {
      this.props.onCalculate(COUNTER_DECREMENT);
    }
  }

  onIncrease() {
    this.setState((prevState) => {
      return { value: prevState.value + COUNTER_INCREMENT };
    });
  }

  onDecrease() {
    this.setState((prevState) => ({
      value: prevState.value + COUNTER_DECREMENT,
    }));
  }

  render() {
    return (
      <Space>
        <Button onClick={this.onIncrease}>+</Button>
        <mark>{this.state.value}</mark>
        <Button onClick={this.onDecrease}>-</Button>
      </Space>
    );
  }
}

export default Counter;
