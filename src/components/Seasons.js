import React, {Component} from 'react'

class Seasons extends Component {

  passSeasons(event){
    this.props.setSeason(event.target.innerText)
  }

  render() {
    return (
      <div id="container">
        <h1>When can you go on vaction?</h1>
        <button className="season" onClick={this.passSeasons.bind(this)}>Spring</button>
        <button className="season" onClick={this.passSeasons.bind(this)}>Summer</button>
        <button className="season" onClick={this.passSeasons.bind(this)}>Fall</button>
        <button className="season" onClick={this.passSeasons.bind(this)}>Winter</button>
      </div>
    )
  }
}

export default Seasons
