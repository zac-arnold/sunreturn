import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'

import App from './App';
import Artist from './Artist'

document.addEventListener('DOMContentLoaded', () => {
ReactDOM.render(
  <Router>
    <App />
    <Artist />
  </Router>,
  document.getElementById('root')
);
})