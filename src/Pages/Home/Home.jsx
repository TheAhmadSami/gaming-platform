import React from 'react';

import { Featured, Trending, Popular } from '../../Components';

import './Home.scss';

function Home(props) {
  return (


    <div id="home" className="page">

      <div className="top-section">
        <Featured />
        <Trending />
      </div>

      <div className="bottom-section">
        < Popular />
        < Popular />

      </div>



    </div>
  )
}

export default Home;