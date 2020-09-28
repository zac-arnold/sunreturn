import React from 'react';

import './App.css';

function Artist() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='/SRLogo.jpg' className="App-logo" alt="logo" />
        <h2>
         Artist Name
        </h2>
        <p>
         Bio
        </p>
        <img src='/Bandcamp.png' className="App-logo" alt="logo" />
        <img src='/Spotify.png' className="App-logo" alt="logo" />
        <img src='/Youtube.png' className="App-logo" alt="logo" />
        <img src='/Instagram.png' className="App-logo" alt="logo" />
        <img src='/Facebook.svg' className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Artist;
