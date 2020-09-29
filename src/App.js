import React from 'react';
import { Route } from 'react-router-dom'

import Nav from './Nav';
import Home from './Home'
import Artist from './Artist'

const App = () => {
  return (
<div>
    <Route path="/" component={Nav} />
    <Route exact path='/' component={Home} />
    <Route exact path='/:artist' component={Artist} />
</div>
  );
}

export default App;
