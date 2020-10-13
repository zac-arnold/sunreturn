import React from 'react';

import './Home.css';

function Home() {
  return (

    <div className="">

        <div className="grid-container catnum">
          <div className="grid-item">
            <a href="https://www.youtube.com/playlist?list=PL3_-29X9BmxOJviy25j6hwBNpTIhU7Un_" alt="" target="blank" rel="noopener noreferrer">
              <img src="./MachineMusic.jpg" alt=""></img>        
            </a>
              <p className="">SR001</p>
              <p className="">Green Grove - Machine Music</p>
          </div>
  
          <div className="grid-item">
            <a href="https://www.youtube.com/playlist?list=PL3_-29X9BmxO3X_bFj3-XzC9QDWkH3bF_" alt="" target="blank" rel="noopener noreferrer">
              <img src="./DatelineLive.jpg" alt=""></img>
            </a>
            <p className="">SR002</p>
            <p className="">Dateline - Dateline Live!</p>
          </div>
  
          <div className="grid-item">
            <a href="https://www.youtube.com/playlist?list=PL3_-29X9BmxOkkdFlPFN3P6jo8ufz8cKs" alt="" target="blank" rel="noopener noreferrer">
              <img src="./BBZ.jpg" alt=""></img>
            </a>
             <p className="">SR003</p>
             <p className="">Baby Zionov - ....And You Are The Bitch</p>
          </div>  

          <div className="grid-item">
          <a href="https://www.youtube.com/playlist?list=PL3_-29X9BmxPHHVcoX1ichAnwOBCIk-uk" alt="" target="blank" rel="noopener noreferrer">
            <img src="./KMTPPSCUSOON.jpg" alt=""></img>
          </a>
            <p className="">SR004</p>
            <p className="">K M T P - P.S. C U SOON</p>
          </div>
          
          <div className="grid-item">
          <a href="https://www.youtube.com/playlist?list=PL3_-29X9BmxMRTNKOtqG15P4TYhHzj9ed" alt="" target="blank" rel="noopener noreferrer">
            <img src="./AmameliaWow.jpg" alt=""></img>
          </a>
            <p className="">SR005</p>
            <p className="">Amamelia - WOW!</p>
          </div>

          <div className="grid-item">
          <a href="https://www.youtube.com/watch?v=r8fF4wJuvh0" alt="" target="blank" rel="noopener noreferrer">
            <img className=""src="./green grove cover.png" alt=""></img>
          </a>
            <p className="">SR006</p>
            <p className="">Green Grove - Of Isthmus</p>
          </div>  

       </div>

    </div>
  );
}

export default Home;
