import React, {Component} from 'react'

class Prices extends Component {

  passPrices(event){
    this.props.setPrice(event.target.innerText)
  }

  render() {
    console.log(this.props.price)
    return (
      <div>
        <h1>What's your budget?</h1>
        <button>$</button>
        <button>$$</button>
        <button>$$$</button>
      </div>

    )
  }
}

export default Prices
