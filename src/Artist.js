import React from 'react';

import lineup from './lineupdata.json'

import './Artist.css';


function Artist (props){
  // console.log('artist props', props)
  // console.log('artist.js params', props.match.params.artist)
  // console.log('artist line up data', lineup.artists)
  // console.log('test', )
  // console.log('lane code', artist)

  const artist = lineup.artists.filter((artist) => artist.name === props.match.params.artist)[0]

  return (
      <div className="artistcomp">
          <div className="artistLogo">
            <a href={ artist.socialMedia.bandcamp } target="blank" rel="noopener noreferrer"><img src='/Bandcamp.png' className="artistsoclogo" alt="logo" /></a>
            <a href={ artist.socialMedia.spotify} target="blank" rel="noopener noreferrer"><img src='/Spotify.png' className="artistsoclogo" alt="logo" /></a>
            <a href={ artist.socialMedia.youtube} target="blank" rel="noopener noreferrer"><img src='/Youtube.png' className="artistsoclogo" alt="logo" /></a>
            <a href={ artist.socialMedia.instagram} target="blank" rel="noopener noreferrer"><img src='/Instagram.png' className="artistsoclogo" alt="logo" /></a>
            <a href={ artist.socialMedia.facebook} target="blank" rel="noopener noreferrer"><img src='/Facebook.svg' className="artistsoclogo" alt="logo" /></a>
          </div>

          <img className="artistphoto" src={ artist.img } alt=""></img>
          <a href={artist.pcredlink} className="hypelinka" target="blank" rel="noopener noreferrer"><p className="hypelink pcred">Photo Credit: {artist.pcredt}</p></a>
          <h2>{props.match.params.artist} </h2>
          <p className="bio"> {artist.bio} </p>
      </div>
    );
}

export default Artist