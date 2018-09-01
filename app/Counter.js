
import React from "react";
import { View, Button } from "react-native";
export default class Counter extends React.Component {
  state = {
    count: 0
  };
  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };
  render() {
    return (
      <Button title={`Count ${this.state.count}`} onPress={this.increment} />
    );
  }
}