import { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <h1>Hello World</h1>
        <h2>mening noutbukim firmasi: {this.props.laptop}</h2>
      </header>
    );
  }
}

export default Header;
