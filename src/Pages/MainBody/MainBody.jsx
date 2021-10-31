import React from 'react';
import { NavBar, SideBar } from '../../Components/';
import { Home } from './../'

function MainBody(props) {
  return (
    <div id="_main_body">
      <SideBar />

      <div className="main-body-content">
        <NavBar />

        <Home />

      </div>
    </div>
  )
}

export default MainBody;