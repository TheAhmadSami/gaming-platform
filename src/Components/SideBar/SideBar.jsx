import React from 'react';
import { SousTitle, Title } from './../../Components';
import { Logo } from './../../Components';
import './SideBar.scss';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function SideBar(props) {
  return (

    <Router>

      <div id="_sidebar">

        <div className="top-item">
          <i className="fal fa-bars"></i>
          <div className='logot'>  <Logo /></div>
        </div>
        <div className="bottom-item">
          <NavLink to='/home'>
            <SousTitle icon="fal fa-home-lg-alt" sousTitle="Home" />
          </NavLink>

          <Title title="ACCOUNT" />
          <NavLink to='/profile'>
            <SousTitle icon="fal fa-user-circle" sousTitle="Profile" />
          </NavLink>
          <NavLink to='/favorite'>   <SousTitle icon="fal fa-heart" sousTitle="Favorite" /></NavLink>
          <NavLink to='/chat'>   <SousTitle icon="fal fa-comments" sousTitle="Chats" /></NavLink>
          <NavLink to='/friends'>   <SousTitle icon="fal fa-user-friends" sousTitle="Friends" /></NavLink>
          <NavLink to='/wallet'>   <SousTitle icon="fal fa-wallet" sousTitle="Wallet" /></NavLink>
          <Title title="MAIN" />
          <NavLink to='/store'>  <SousTitle icon="fal fa-store" sousTitle="Store" /></NavLink >
          <NavLink to='/market'>  <SousTitle icon="fal fa-cubes" sousTitle="Market" /></NavLink >
          <NavLink to='/streams'>  <SousTitle icon="fal fa-video" sousTitle="Streams" /></NavLink >
          <NavLink to='/community'>   <SousTitle icon="fal fa-users" sousTitle="Community" /></NavLink >
          <Title title="SUPPORT" />
          <NavLink to='/report'>  <SousTitle icon="fal fa-info-circle" sousTitle="Report" /></NavLink >
          <NavLink to='/help'>   <SousTitle icon="fal fa-question-square" sousTitle="Help" /></NavLink >
        </div >
      </div >

    </Router >
  )
}

export default SideBar;