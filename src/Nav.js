import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <div className="artistNav border">
      <header className="">
        <img src='/SRLogo.jpg' className="srlogo" alt="logo" />
        <h1>
          SUNRETURN
        </h1>
        <p className="blurb">
          Sunreturn is an independent record label and artist service based in Tāmaki Makaurau, Aotearoa. We strive to amplify the work of artists who find freedom in imagining new and unique sounds.
        </p>
        <h2>
          AMAMELIA  
        </h2>      
        <h2>
          BABY ZIONOV 
        </h2>      
        <h2>
          DATELINE 
        </h2>      
        <h2>
          GREEN GROVE 
        </h2>      
        <h2>
          K M T P 
        </h2>
        <br></br>
        <div className="">
          <img src='/Spotify.png' className="srsoclogo" alt="logo" />
          <img src='/Facebook.svg' className="srsoclogo" alt="logo" />
          <br></br>
          <img src='/Instagram.png' className="srsoclogo" alt="logo" />
          <img src='/Youtube.png' className="srsoclogo" alt="logo" />
        </div>

      </header>
    </div>
  );
}

export default Nav;
