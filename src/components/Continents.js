import React, { Component } from 'react';

class Continents extends Component {

  passContinent(event){
    this.props.setContinent(event.target.innerText)
  }

  render() {
        console.log(this.props.continent)
    debugger

    return (
      <div>
        <h1>Where would you like to travel?</h1>
        <a onClick={this.passContinent.bind(this)} name="Europe" >Europe</a>
        <a onClick={this.passContinent.bind(this)} name="Asia">Asia</a>
      </div>
    );
  }
}

export default Continents;
