import React from 'react';

import { Logo } from './../../Components';
import { Login } from './../';

import './Auth.scss';

function Auth(props) {
  return (
    <div id="_auth">
      <div className="left-section">
        <Logo />
      </div>
      <div className="right-section">
        <div className="container">
          <Login />
        </div>
      </div>
    </div>
  )
}

export default Auth;