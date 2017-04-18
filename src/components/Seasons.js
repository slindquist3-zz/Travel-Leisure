import React, {Component} from 'react'

class Seasons extends Component {
  constructor(props) {
    super(props)

    this.state = {season: ""}

  }

  render() {
    return (
      <div>
        <h1>When can you go on vaction?</h1>
        <button>Spring</button>
        <button>Summer</button>
        <button>Fall</button>
        <button>Winter</button>
      </div>
    )
  }
}

export default Seasons
