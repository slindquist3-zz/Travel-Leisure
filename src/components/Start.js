import React, { Component } from 'react';

class Start extends Component {

  handleClick(event) {
    event.preventDefault();
  }

  render() {
    return (
        <button onClick={this.handleClick}>Start!</button>
    );
  }
}

export default Start;
