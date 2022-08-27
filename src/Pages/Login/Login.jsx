import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import * as config from './../../config';
import { SocialMediaAuth, TextField, Button } from './../../Components/';

import './Login.scss';

function Login(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function loginFunction() {
    if (email && password) {

      var data = new FormData();
      data.append('email', email);
      data.append('password', password);

      axios({
        method: 'post',
        url: config.API_LINK + 'login.php',
        data: data,
        headers: { 'Content-Type': 'multipart/form-data', }
      })
        .then(response => {
          console.log(response.data[0].token);

          localStorage.setItem('user_t', response.data[0].token);
          window.location.reload();
        })
        .catch(response => {
          console.log(response);
        });


      // localStorage.setItem('user_id', username);
      // window.location.reload();
    }
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

      <Link to="forgot-password" className="password-forget">Forgotten password?</Link>

      <p className="splitter"></p>
      <p className="register-now">Don't have an acount? <Link to="./register">Register</Link></p>

    </div>
  )
}

export default Login;