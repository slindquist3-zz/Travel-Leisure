import React, {Component} from 'react'

class Prices extends Component {

  passPrices(event){
    this.props.setPrice(event.target.innerText)
  }

  render() {
    return (
      <div id="container">
        <h1>What's your budget?</h1>
        <button onClick={this.passPrices.bind(this)}>$</button>
        <div className="divider"></div>
        <button onClick={this.passPrices.bind(this)}>$$</button>
        <div className="divider"></div>
        <button onClick={this.passPrices.bind(this)}>$$$</button>
      </div>
    )
  }
}

export default Prices
