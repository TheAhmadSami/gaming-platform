import React from 'react';
import axios from 'axios';
import * as config from './config';
import './Assets/styles/styles.scss';

import { MainBody, Auth } from './Pages';

function Main(props) {

  let token = localStorage.getItem('user_t');

  var data = new FormData();
  data.append('token', token);

  if (token) {
    axios({
      method: 'post',
      url: config.API_LINK + 'checkToken.php',
      data: data,
      headers: { 'Content-Type': 'multipart/form-data', }
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(response => {
        localStorage.clear('user_t');
        window.location.reload();
      });
  }

  if (token) {
    return <MainBody />
  } else {
    return <Auth />
  }

  // if (x) {
  //   if (checkLogin(x)) {
  //     return (
  //       <p>Home</p>
  //     )
  //   }else{
  //     return(
  //       <p>Login</p>
  //     )
  //   }
  // }else if(!x){
  //   return(
  //     <p>Login</p>
  //   )
  // }


}

export default Main;