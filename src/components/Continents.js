import React, { Component } from 'react';

class Continents extends Component {

  render() {
    return (
      <div>
        <h1>Where would you like to travel?</h1>
        <button onClick={this.props.setContinent} value="Europe" name="Europe">Europe</button>
        <button onClick={this.props.setContinent} value="Asia" name="Asia">Asia</button>
      </div>
    );
  }
}

export default Continents;
