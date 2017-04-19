import React, {Component} from 'react'

class Results extends Component {

  render() {
    return (
      <div>
        Results
        Consider traveling to {this.props.continent} in {this.props.season}
        while budgeting for about {this.props.price}. Bon Voyage!
      </div>

    )
  }
}

export default Results
