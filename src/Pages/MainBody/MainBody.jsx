import React from 'react';
import { NavBar, SideBar } from '../../Components/';
import { Home, Profile } from './../';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import './MainBody.scss';


function MainBody(props) {
  return (
    <Router>
      <div id="_main_body">

        <div className="main">
          <SideBar />
        </div>

        <div className="main-body-content">
          <NavBar />

          <Switch>


            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/profile">
              <Profile />
            </Route>



          </Switch>

        </div>
      </div>
    </Router>
  )
}

export default MainBody;