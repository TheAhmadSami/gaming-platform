import React from 'react';
import { NavBar, SideBar } from '../../Components/';
import { Home } from './../'

import './MainBody.scss';


function MainBody(props) {
  return (
    <div id="_main_body">

      <div className="main">
        <SideBar />
      </div>

      <div className="main-body-content">
        <NavBar />

        <Home />

      </div>
    </div>
  )
}

export default MainBody;