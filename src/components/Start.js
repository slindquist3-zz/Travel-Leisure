import React, { Component } from 'react';

class Start extends Component {

  handleClick(event) {
    event.preventDefault();
    console.log("I work")
  }

  render() {
    return (
        <button onClick={this.handleClick}>This is my button</button>
    );
  }
}

export default Start;
