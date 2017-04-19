import React from 'react';
import ReactDOM from 'react-dom';
import '../public/scss/main.min.css'
import { Router, browserHistory, Route, IndexRoute} from 'react-router'
import App from './components/app'
import Start from './components/start'
import Continents from './components/continents'
import Prices from './components/prices'
import Seasons from './components/seasons'
import Results from './components/results'

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
    </Route>
    </Router>
  ), document.getElementById('root'));


  /* <Route path="/" component={Start} />
  <Route path='/continents' component={Continents} />
  <Route path="/prices" component={Prices} />
  <Route path="/seasons" component={Seasons} />
  <Route path="/results" component={Results} /> */
