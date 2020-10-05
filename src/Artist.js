import React from 'react';
import { Route } from 'react-router-dom'

import Dsplogo from './Dsplogo';
import lineup from './lineupdata.json'

import './Artist.css';



function Artist (props){
  const artist = lineup.artists.filter((artist) => artist.name === props.match.params.artist)[0]

  return (
      <div className="artistcomp">
        < Route component={Dsplogo}/>
        <img className="artistphoto" src={ artist.img } alt=""></img>
        <a href={artist.pcredlink} className="hypelinka" target="blank" rel="noopener noreferrer"><p className="hypelink pcred">Photo Credit: {artist.pcredt}</p></a>
        <h1 className="artistname">{props.match.params.artist} </h1>
        <p className="bio artistname"> {artist.bio} </p>
      </div>
    );
}

export default Artist