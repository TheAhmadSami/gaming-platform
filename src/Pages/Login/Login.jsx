import React, { useState } from 'react';

import { SocialMediaAuth, TextField, Button } from './../../Components/';

import './Login.scss';

function Login(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function loginFunction() {
    console.log(username, password);
  }

  return (
    <div id="_login">
      <SocialMediaAuth />
      <p className="splitter"><span>or with Email</span></p>

      <div className="form">

        <TextField
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

      </div>

      <Button text="Log In" onClick={loginFunction} />

      <a href="forgot-password" className="password-forget">Forgotten password?</a>

      <p className="splitter"></p>
      <p className="register-now">Don't have an acount? <a href="./register">Register</a></p>

    </div>
  )
}

export default Login;