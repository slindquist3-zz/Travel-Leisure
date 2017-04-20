import React, {Component} from 'react'

class Results extends Component {

  constructor(props) {
    super(props)

    this.vacation = this.vacation.bind(this)
    this.flights = this.flights.bind(this)
    this.airbnb = this.airbnb.bind(this)
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

  airbnb(city){
    window.open('https://www.airbnb.com/s/','_blank')
  }

  flights(city){
    window.open('https://www.kayak.com/','_blank')
  }

  render() {
    return (
      <div id="container">
        {console.log(this.vacation()[this.props.continent][this.props.season][this.props.price])}
        <h1>Check out {(this.vacation()[this.props.continent][this.props.season][this.props.price])}!</h1>
        <button onClick={this.airbnb}>AirBnB</button>
        <button onClick={this.flights}>Flights</button>
        <button onClick={this.props.restart}>Plan Again</button>
      </div>

    )
  }
}

export default Results
