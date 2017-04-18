import React, { Component } from 'react';

class Continents extends Component {

  constructor(props) {
    super(props)

    this.state = {continent: ""}

    this.clickEurope = this.clickEurope.bind(this);
    this.clickAsia = this.clickAsia.bind(this);
  }

  clickEurope(event) {
    event.preventDefault();
    this.setState({continent: event.target.value});
    debugger
  }

  clickAsia(event) {
    event.preventDefault();
    this.setState({continent: "Asia"});
  }


  render() {
    return (
      <div>
        <h1>Where would you like to travel?</h1>
        <button onClick={this.clickEurope} value="Europe">Europe</button>
        <button onClick={this.clickAsia} value="Asia">Asia</button>
      </div>
    );
  }
}

export default Continents;
