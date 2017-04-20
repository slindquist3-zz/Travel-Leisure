import React, { Component } from 'react';
import {browserHistory} from 'react-router'

class Start extends Component {

  handleClick(event) {
    this.props.setStart()
  }

  render() {
    return (
      <div id="landing">
        <button className="start" onClick={this.handleClick.bind(this)}>Plan Trip</button>

      </div>
    );
  }
}

export default Start;
