import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'

import App from './App';
import * as serviceWorker from './serviceWorker';

document.addEventListener('DOMContentLoaded', () => {
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
})