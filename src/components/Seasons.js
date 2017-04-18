import React, {Component} from 'react'

class Seasons extends Component {

  passSeasons(event){
    this.props.setSeason(event.target.innerText)
  }

  render() {
    return (
      <div>
        <h1>When can you go on vaction?</h1>
        <button onClick={this.passSeasons.bind(this)}>Spring</button>
        <button onClick={this.passSeasons.bind(this)}>Summer</button>
        <button onClick={this.passSeasons.bind(this)}>Fall</button>
        <button onClick={this.passSeasons.bind(this)}>Winter</button>
      </div>
    )
  }
}

export default Seasons
