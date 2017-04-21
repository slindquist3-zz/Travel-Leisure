import React, { Component } from 'react';

class Start extends Component {

  handleClick(event) {
    this.props.setStart()
  }

  render() {
    return (
      <div id="container">
        <h1>Travel / Leisure</h1>
          <p>Plan your destination with just 4 buttons.</p>
        <button onClick={this.handleClick.bind(this)}>Plan Trip</button>
      </div>
    );
  }
}

export default Start;
