import React, { Component } from 'react';

class Button extends Component {


  handleClick(event) {
    event.preventDefault();
    alert("I was clicked!");
  }

  render() {
    return (
        <button onClick={this.handleClick}>This is my button</button>
    );
  }
}

export default Button;
