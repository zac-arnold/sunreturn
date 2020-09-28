import React from 'react';
import { Route } from 'react-router-dom'

import Nav from './Nav';
import Home from './Home'
const App = () => {
  return (
<div>
    <Route path="/" component={Nav} />
    <Route exact path='/' component={Home} />
</div>
  );
}

export default App;


