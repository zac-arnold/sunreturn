import React from 'react';
import { Link, Route } from 'react-router-dom'

import lineup from './lineupdata.json'

import './Artist.css';


function Artist() {

  console.log('artist.js lineup', lineup)

  return (
    <div className="">
      <header className="">
        <img src="" alt=""></img>
        <h2>
         Artist Name
        </h2>
        <p>
         Bio
        </p>
        <p>
         Photo Credit
        </p>
        <div className="artistLogo">
        <img src='/Bandcamp.png' className="artistsoclogo" alt="logo" />
        <img src='/Spotify.png' className="artistsoclogo" alt="logo" />
        <img src='/Youtube.png' className="artistsoclogo" alt="logo" />
        <img src='/Instagram.png' className="artistsoclogo" alt="logo" />
        <img src='/Facebook.svg' className="artistsoclogo" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default Artist;
