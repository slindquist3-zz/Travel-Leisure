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
       Spring: {$: [{name: "Hanoi, Vietnam", image:'/images/hanoi_vietnam.jpeg'}], $$: [{name: "Hong Kong, China", image:'/images/hong_kong_china.jpg'}], $$$: [{name: "Kyoto, Japan", image:'/images/kyoto.jpg'}]},
       Summer: {$: [{name: "Borneo, Malaysia", image:'/images/borneo.jpg'}], $$: [{name: "Uluwatu, Bali, Indonesia", image: '/images/bali.jpg'}], $$$: [{name: "Singapore", image:'/images/singapore.jpg'}]},
       Fall: {$: [{name: "Taipei City, Taiwan", image:'/images/taipei.jpg'}], $$: [{name: "Seoul, South Korea", image:'/images/seoul.jpg'}], $$$: [{name: "Tokyo, Japan", image:'/images/tokyo.jpg'}]},
       Winter: {$: [{name: "Chang Mai, Thailand", image:'/images/chang.jpg'}], $$: [{name: "Goa, India", image:'/images/goa.jpg'}], $$$: [{name: "Hokkaido, Japan", image: '/images/hokkaido.jpg'}]}
     },
     Europe: {
       Spring: {$: [{name: "Budapest, Hungary", image: '/images/budapest.jpg'}], $$: [{name: "Barcelona, Spain", image:'/images/barcelona.jpg'}], $$$: [{name: "Milan, Italy", image:'/images/milan.jpg'}]},
       Summer: {$: [{name: "Prague, Czech Republic", image: '/images/prague.jpg'}], $$: [{name: "Berlin, Germany", image:'/images/berlin.jpg'}], $$$: [{name: "Stockholm, Sweden", image:'/images/stockholm.jpg'}]},
       Fall: {$: [{name: "Transylvania, Romania", image:'/images/transylvania.jpg'}], $$: [{name: "Madrid, Spain", image:'/images/madrid.jpg'}], $$$: [{name: "Paris, France", image:'/images/paris.jpg'}]},
       Winter: {$: [{name: "Lisbon, Portugal", image: '/images/lisbon.jpg'}], $$: [{name: "Amsterdam, Netherlands", image:'/images/amsterdam.jpg'}], $$$: [{name: "Vienna, Austria", image:'/images/vienna.jpg'}]}
     }
   }

   return vacation;
  }

  //Spring: {$: {Hanoi:{name: "Hanoi Vietnam", picture: "url"}, $$: "Hong Kong, China", $$$: "Kyoto, Japan"}

$:[{name:"hanoi vietnam", picture: "url"}]

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
        <h1>Check out {(this.vacation()[this.props.continent][this.props.season][this.props.price][0]["name"])}!</h1>
        {/* <button onClick={this.airbnb}>AirBnB</button> */}
        <img className="image" src={(this.vacation()[this.props.continent][this.props.season][this.props.price][0]["image"])} />
        <div className="divider"></div>
        {/* <button onClick={this.flights}>Flights</button> */}
        <button id="plan-again" onClick={this.props.restart}>Plan Again</button>
      </div>


    )
  }
}

export default Results
