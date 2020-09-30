import React from 'react';
import { Link } from 'react-router-dom'

import './Nav.css';
import lineup from './lineupdata.json'

function Nav(props) {

  return (
    <div className="artistNav border">
      <header className="">
        <img src='/SRLogo.jpg' className="srlogo" alt="logo" />
        <h1>
          SUNRETURN {props.test}
        </h1>
        <p className="blurb">
          Sunreturn is an independent record label and artist service based in Tāmaki Makaurau, Aotearoa. We strive to amplify the work of artists who find freedom in imagining new and unique sounds.
        </p>
        <ul >
          {lineup.artists.map(key => (
              <h2 key={key.id}><Link to={`/${key.name}`}>{key.name}</Link></h2>
          ))}
        </ul>
        <br></br>
        <div className="">
        <a href="https://open.spotify.com/user/5eiwm3ezpotach39w3v3vms00?si=g856l_BdQ2yLUfw44D7Efw" target="blank" rel="noopener noreferrer"><img src='/Spotify.png' className="srsoclogo" alt="Spotify Logo" /></a>
        <a href="https://www.youtube.com/channel/UCkEkTu3m49xpSFj55zjOiaQ/videos" target="blank" rel="noopener noreferrer"><img src='/Youtube.png' className="srsoclogo" alt="logo" /></a>  
        <br></br>
        <a href="https://www.instagram.com/sunreturn.nz/" target="blank" rel="noopener noreferrer"><img src='/Instagram.png' className="srsoclogo" alt="logo" /></a>  
        <a href="https://www.facebook.com/Sunreturnnz" target="blank" rel="noopener noreferrer"><img src='/Facebook.svg' className="srsoclogo" alt="logo" /></a>  
        </div>

      </header>
    </div>
  );
}

export default Nav;
