import React, { Component } from 'react';
import Start from './Start.js'
import Continents from './Continents'
import Prices from './Prices'
import Seasons from './Seasons'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      continent: "",
      price: "",
      season: ""
    }
  }

  render() {
    return (
      <div>
        <Start/>
        <Continents />
        <Prices />
        <Seasons />
      </div>
    );
  }
}

export default App;
