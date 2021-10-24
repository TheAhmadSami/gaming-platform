import React from 'react';

import './Assets/styles/styles.scss';

import { Home, Auth } from './Pages';

function Main(props) {

  // localStorage.setItem('user_id', 'jf7596f9hc965ty9f8w37y7w386');
  
  let x = localStorage.getItem('user_id');

  if (x) {
    return <Home />
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