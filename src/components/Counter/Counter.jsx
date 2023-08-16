import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "Fazliddin",
    };
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  reset() {
    this.setState({
      count: 0,
    });
  }
  changeName() {
    this.setState({
      name: this.state.name === "Fazliddin" ? "Rasulov" : "Fazliddin",
    });
  }
  render() {
    return (
      <>
        <h1>Hello Counter My name is {this.state.name}</h1>
        <button onClick={(e) => this.changeName(e)}>toggle name</button>
        <h2>{this.state.count}</h2>
        <button onClick={(e) => this.decrement(e)}>--</button>
        <button onClick={(e) => this.reset(e)}>reset</button>
        <button onClick={(e) => this.increment(e)}>++</button>
      </>
    );
  }
}

export default Counter;
