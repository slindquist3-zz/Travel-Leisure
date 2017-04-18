import React, { Component } from 'react';

class Continents extends Component {

  passContinents(event){
    this.props.setContinent(event.target.innerText)
  }

  render() {
    return (
      <div>
        <h1>Where would you like to travel?</h1>
        <a onClick={this.passContinents.bind(this)} name="Europe" >Europe</a>
        <a onClick={this.passContinents.bind(this)} name="Asia">Asia</a>
      </div>
    );
  }
}

export default Continents;
