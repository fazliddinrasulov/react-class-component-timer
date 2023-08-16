import { Component } from "react";
import "./Clock.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      intervalId: 0,
    };
  }
  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
    console.log(intervalId);
    this.setState({
      intervalId: intervalId,
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  render() {
    return (
      <article>
        <div className="timer">
          <h1>{this.state.time}</h1>
        </div>
      </article>
    );
  }
}

export default Clock;
