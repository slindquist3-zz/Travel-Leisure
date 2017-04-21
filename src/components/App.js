import React, { Component } from 'react';
import Start from './start.js'
import Continents from './continents'
import Prices from './prices'
import Seasons from './seasons'
import Results from './results'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      continent: "",
      price: "",
      season: "",
      page: 0
    }
  }

  setContinent(continent) {
    this.setState({continent})
      console.log(this.state.page++)
    this.setState({page: this.state.page++})
  }

  setPrice(price) {
    this.setState({price})
    console.log(this.state.page++)
    this.setState({page: this.state.page++})
  }

  setSeason(season) {
    this.setState({season})
    console.log(this.state.page++)
    this.setState({page: this.state.page++})
  }

  setStart(){
    console.log(this.state.page++)
    this.setState({page: this.state.page++})
  }
  restart() {
    console.log(this.state.page++)
    this.setState({page: 1})
  }

  renderComponent(){
    if(this.state.page === 0){
      return (<Start setStart={this.setStart.bind(this)}/>)
    } else if (this.state.page === 1) {
      return (<Continents continent={this.state.continent} setContinent={this.setContinent.bind(this)}/>)
    } else if (this.state.page ===2) {
      return (<Seasons season={this.state.seasons} setSeason={this.setSeason.bind(this)}/>)
    } else if (this.state.page === 3){
      return (<Prices price={this.state.price} setPrice={this.setPrice.bind(this)}/>)
    } else if (this.state.page === 4){
      return (<Results restart={this.restart.bind(this)} continent={this.state.continent} season={this.state.season} price={this.state.price} />)
    }
  }

  render() {
    return (
      <div>
        {this.renderComponent()}
      </div>
    );
  }
}

export default App;
