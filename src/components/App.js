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

  vacation() {
   const vacation = {
     Asia: {
       Spring: {$: "Hanoi, Vietnam", $$: "Hong Kong, China", $$$: "Kyoto, Japan"},
       Summer: {$: "Borneo, Malaysia", $$: "Uluwatu, Bali, Indonesia", $$$: "Singapore"},
       Fall: {$: "Hanoi, Vietnam", $$: "Beijing, China", $$$: "Tokyo, Japan"},
       Winter: {$: "Chang, Mai, Thailand", $$: "Panjim, India", $$$: "Hokkaido, Japan"}
     },
     Europe: {
       Spring: {$: "Budapest, Hungary", $$: "Barcelona, Spain", $$$: "Milan, Italy"},
       Summer: {$: "Prague, Czech Republic", $$: "Berlin, Germany", $$$: "Stokholm, Sweden"},
       Fall: {$: "Budapest, Hungary", $$: "Madrid, Spain", $$$: "Paris, France"},
       Winter: {$: "Lisbon, Portugol", $$: "Amsterdam, Netherlands", $$$: "Vienna, Austria"}
     }
   }

   return vacation;
  }

  displayResult(vacation) {
    debugger
    console.log(vacation())
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

  renderComponent(){
    if(this.state.page === 0){
      return (<Start id="landing" setStart={this.setStart.bind(this)}/>)
    }
    else if (this.state.page === 1) {
      return (<Continents continent={this.state.continent} setContinent={this.setContinent.bind(this)}/>)
    }
    else if (this.state.page ===2) {
      return (<Seasons season={this.state.seasons} setSeason={this.setSeason.bind(this)}/>)
    }
    else if (this.state.page === 3){
      return (<Prices price={this.state.price} setPrice={this.setPrice.bind(this)}/>)
    }
    else if (this.state.page === 4){
      return (<Results vacation={this.vacation.bind(this)} displayResult={this.displayResult.bind(this)} continent={this.state.continent} price={this.state.price} season={this.state.season} />)
    }
  }

  render() {

    return (
      <div>
        {/* {this.props.children} */}
        {this.renderComponent()}
      </div>
    );
  }
}

export default App;
