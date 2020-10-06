import React from 'react';

import './Home.css';

function Home() {
  return (

    <div className="">
        <h1>
          DISCOGRAPHY
        </h1>

        <div className="covers">
          <img src="./MachineMusic.jpg" alt=""></img>
          <p className="catnum">SR001</p>
          <p>Green Grove - Machine Music</p>
        </div>

        <div className="covers">
          <img src="./DatelineLive.jpg" alt=""></img>
          <p className="catnum">SR002</p>
          <p>Dateline - Dateline Live!</p>
        </div>
      
        <div className="covers">
          <img src="./BBZ.jpg" alt=""></img>
          <p className="catnum">SR003</p>
          <p>Baby Zionov - ....And You Are The Bitch</p>
        </div>

        <div className="covers">
          <img src="./KMTPPSCUSOON.jpg" alt=""></img>
          <p className="catnum">SR004</p>
          <p>K M T P - P.S. C U SOON</p>
        </div>

        <div className="covers">
          <img src="./AmameliaWow.jpg" alt=""></img>
          <p className="catnum">SR005</p>
          <p>Amamelia - WOW!</p>
        </div>

        <p>
          THIS IS WHERE I WANT THE EMAIL EMBED TO GO 
        </p> 

    </div>
  );
}

export default Home;
