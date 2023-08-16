import React, { Component } from "react";
import Header from "./components/Header/Header";
import Counter from "./components/Counter/Counter";
import "./App.css";
import Clock from "./components/Clock/Clock";

class App extends Component {
  render() {
    const laptop = "MacBook";
    return (
      <div className="App">
        <Header laptop={laptop} />
        <Counter />
        <Clock />
      </div>
    );
  }
}

export default App;
