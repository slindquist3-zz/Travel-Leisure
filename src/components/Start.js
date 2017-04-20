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
          <p>Traveling is about getting to where you want to be, but sometimes it's hard to figure out where to go, when to go, and how much it could cost.</p>
          <p>Plan your trip with just 4 clicks a button.</p>
        </div>
        <button className="start-button" onClick={this.handleClick.bind(this)}>Plan Trip</button>

      </div>
    );
  }
}

export default Start;
