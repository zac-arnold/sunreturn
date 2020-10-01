import React from 'react';
import { Route } from 'react-router-dom';

import Social from './Social'
import lineup from './lineupdata.json'

import './Artist.css';

// What I want to do

// have access to line up data
//console.log('artist.js lineup', lineup)

// the url (params) determines what data is being shown
//console.log('artist.js params', props.match.params.artist)

// that data brings up artist info into the different areas (name, bio, social links)

// potentialy need to make single components for photo credit, img, bio and social channels that are nested into artist
// 40min mark & 52min mark

function Artist (props){
  console.log('artist props', props)
  console.log('artist.js params', props.match.params.artist)
  console.log('artist line up data', lineup.artists)
  console.log('test', )

  return (
      <div className="">
          <img src="" alt=""></img>
          <p>Photo Credit</p>
          <h2>Artist Name: {props.match.params.artist} </h2>
          <p>Bio</p>
          <Route component={Social} />

      </div>
    );



}

export default Artist