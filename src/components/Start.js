import React, { Component } from 'react';
import {browserHistory} from 'react-router'

class Start extends Component {

  handleClick(event) {

    this.props.setStart()
  }

  render() {
    return (
        <button onClick={this.handleClick.bind(this)}>Start!</button>
    );
  }
}

export default Start;
