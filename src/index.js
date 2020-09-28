import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Nav from './Nav';
import Home from './Home';
import Artist from './Artist';
import * as serviceWorker from './serviceWorker';

document.addEventListener('DOMContentLoaded', () => {
ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Artist />
  </React.StrictMode>,
  document.getElementById('root')
);
})