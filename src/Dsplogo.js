import React from 'react'

import lineup from './lineupdata.json'

import './Artist.css';


function Dsplogo(props) {
  const artist = lineup.artists.filter((artist) => artist.name === props.match.params.artist)[0]

  return (
    <>
          <span className="artistLogo">
            <a href={ artist.socialMedia.bandcamp } target="blank" rel="noopener noreferrer"><img src='/Bandcamp.png' className="artistsoclogo" alt="logo" /></a>
            <a href={ artist.socialMedia.spotify} target="blank" rel="noopener noreferrer"><img src='/Spotify.png' className="artistsoclogo" alt="logo" /></a>
            <a href={ artist.socialMedia.youtube} target="blank" rel="noopener noreferrer"><img src='/Youtube.png' className="artistsoclogo" alt="logo" /></a>
            <a href={ artist.socialMedia.instagram} target="blank" rel="noopener noreferrer"><img src='/Instagram.png' className="artistsoclogo" alt="logo" /></a>
            <a href={ artist.socialMedia.facebook} target="blank" rel="noopener noreferrer"><img src='/Facebook.svg' className="artistsoclogo" alt="logo" /></a>
          </span>
    </>
  )
}

export default Dsplogo
