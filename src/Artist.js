import React from 'react';

import './Artist.css';

function Artist() {
  return (
    <div className="">
      <header className="">
        <h2>
         Artist Name
        </h2>
        <p>
         Bio
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
