import React, { Component } from 'react';

class Continents extends Component {

  passContinents(event){
    this.props.setContinent(event.target.innerText)
  }

  render() {
    return (
      <div>
        <h1>Where would you like to travel?</h1>
        <button onClick={this.passContinents.bind(this)} name="Europe" >Europe</button>
        <button onClick={this.passContinents.bind(this)} name="Asia">Asia</button>
      </div>
    );
  }
}

export default Continents;
