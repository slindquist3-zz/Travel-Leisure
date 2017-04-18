import React, {Component} from 'react'

class Results extends Component {

  render() {
    return (
      <div>
        Results
        You've chosen to travel to {this.props.continent} in {this.props.season}.
        You should budget for about {this.props.price}. Bon Voyage!
      </div>

    )
  }
}

export default Results
