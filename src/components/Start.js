import React, { Component } from 'react';
import {browserHistory} from 'react-router'

class Start extends Component {

  handleClick(event) {
    this.props.setStart()
  }

  render() {
    return (
      <div id="landing">
          <h1 id="logo">Choose Your Own Adventure</h1>
        <div id="subtext">
          <p>The most enjoyable part of traveling is getting to where you want to be, but sometimes it can be hard to figure out where to go, not to mention when to go or how much it could cost.
          Choose Your Own Adventure can help you plan your trip with just 4 clicks a button.</p>
        </div>
        <button className="start" onClick={this.handleClick.bind(this)}>Plan Trip</button>

      </div>
    );
  }
}

export default Start;
