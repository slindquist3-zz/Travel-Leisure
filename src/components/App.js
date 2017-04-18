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

  setContinent(continent) {
    this.setState({continent})
  }

  setPrice(price) {
    this.setState({price})
  }

  setSeason(season) {
    this.setSeason({season})
  }

  render() {
    return (
      <div>
        <Start/>
        <Continents continent={this.state.continent} setContinent={this.setContinent.bind(this)}/>
        <Prices price={this.state.price} setPrice={this.setPrice.bind(this)}/>
        <Seasons price={this.state.seasons} setPrice={this.setSeasons.bind(this)}/>
      </div>
    );
  }
}

export default App;
