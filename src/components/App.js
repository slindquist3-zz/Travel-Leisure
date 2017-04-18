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

  setContinent() {
    debugger
    this.setState({continent: "poop"})
    debugger
  }

  render() {
    return (
      <div>
        <Start/>
        <Continents continent={this.state.continent} setContinent={this.setContinent.bind(this)}/>
        <Prices />
        <Seasons />
      </div>
    );
  }
}

export default App;
