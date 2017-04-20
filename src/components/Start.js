import React, { Component } from 'react';

class Start extends Component {

  handleClick(event) {
    this.props.setStart()
  }

  render() {
    return (
      <div id="container">
        <h1>Choose Your Own Adventure</h1>
          <p>Travel is about getting where you want to be.</p>
          <p>Plan your trip here with just 4 buttons.</p>
        <button className="start-button" onClick={this.handleClick.bind(this)}>Plan Trip</button>
      </div>
    );
  }
}

export default Start;
