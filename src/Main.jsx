import React from 'react';

import './Assets/styles/styles.scss';

import { Home, Login } from './Pages';

function Main(props) {

  // localStorage.setItem('hala', 'i love you so much');
  
  let x = localStorage.getItem('hala');

  if (x) {
    return <Home />
  }else{
    return <Login />
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