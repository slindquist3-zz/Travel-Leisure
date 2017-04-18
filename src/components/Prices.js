import React, {Component} from 'react'

class Prices extends Component {

  constructor(props) {
    super(props)

    this.state = {price: ""}

  }

  render() {
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
