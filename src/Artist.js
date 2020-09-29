import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import lineup from './lineupdata.json'

import './Artist.css';

console.log('artist.js lineup', lineup)

class Artist extends Component() {
  
render () {
 const { id } = this.props.match.params;
  
    return (
      <div className="">
        <header className="">
          <img src="" alt=""></img>
          <h2>
          Artist Name { id }
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

}

export default withRouter (Artist)
