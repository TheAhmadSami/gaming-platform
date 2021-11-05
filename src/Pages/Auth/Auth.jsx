import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Logo } from './../../Components';
import { Login, Signup } from './../';

import './Auth.scss';

function Auth(props) {
  return (
    <Router>

      <div id="_auth">
        <div className="left-section">
          <Logo />
        </div>
        <div className="right-section">
          <div className="container">
            <Switch>

              <Route path="/" exact>
                <Login />
              </Route>

              <Route path="/login">
                <Login />
              </Route>

              <Route path="/register" >
                <Signup />
              </Route>

            </Switch>
          </div>
        </div>
      </div>

    </Router>
  )
}

export default Auth;