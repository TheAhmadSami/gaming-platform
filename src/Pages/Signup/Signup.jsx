import React, { useState } from 'react';
import axios from 'axios';
import * as config from './../../config';
import { SocialMediaAuth, TextField, Button } from './../../Components/';

import './Signup.scss';
import { Link } from 'react-router-dom';

function Signup(props) {

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function loginFunction() {
    if (email && username && password) {

      var data = new FormData();
      data.append('email', email);
      data.append('username', username);
      data.append('password', password);

      axios({
        method: 'post',
        url: config.API_LINK + 'signUp.php',
        data: data,
        headers: { 'Content-Type': 'multipart/form-data', }
      })
        .then(response => {
          console.log(response.data);

          localStorage.setItem('user_t', response.data);
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
    <div id="_signup">
      <SocialMediaAuth />
      <p className="splitter"><span>or with Email</span></p>

      <div className="form">

        <TextField
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

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

      <Button text="Register" onClick={loginFunction} />

      <p className="splitter"></p>
      <p className="register-now">Already have an acount? <Link to="./login">Log In</Link></p>

    </div>
  )
}

export default Signup;