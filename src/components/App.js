import React, { Component } from 'react';
import Start from './Start.js'
import Continents from './Continents'
import Prices from './Prices'
import Seasons from './Seasons'
import Results from './Results'

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
    this.setState({season})
  }

  render() {
    return (
      <div>
        <Start/>
        <Continents continent={this.state.continent} setContinent={this.setContinent.bind(this)}/>
        <Prices price={this.state.price} setPrice={this.setPrice.bind(this)}/>
        <Seasons season={this.state.seasons} setSeason={this.setSeason.bind(this)}/>
        <Results continent={this.state.continent} price={this.state.price} season={this.state.season} />
      </div>
    );
  }
}

export default App;
