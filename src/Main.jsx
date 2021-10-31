import React from 'react';

import './Assets/styles/styles.scss';

import { MainBody, Auth } from './Pages';

function Main(props) {

  let x = localStorage.getItem('user_id');

  if (x) {
    return <MainBody />
  }else{
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