import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'

import Artist from './Artist'
import Home from './Home'
import Nav from './Nav';


const App = (props) => {
  return (
    <Router>
      <div>
      <Route path="/" component={Nav} />
      <Route exact path='/' component={Home} />
      <Route path='/:artist' component={Artist} />
      </div>
    </Router>

  );
}

export default App;
