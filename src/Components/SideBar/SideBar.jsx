import React from 'react';
import { SousTitle, Title } from './../../Components';
import { Logo } from './../../Components';
import './SideBar.scss';
import { NavLink, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function SideBar(props) {
  return (
    <div id="_sidebar">

      <div className="top-section">
        <i className="fal fa-bars"></i>
        <Logo type="dark" />
      </div>

      <div className="menu">

        <NavLink to='/home' activeClassName="active">
          <SousTitle icon="fal fa-home-lg-alt" sousTitle="Home" />
        </NavLink>

        <Title title="account" />
        <NavLink to='/profile' activeClassName="active">
          <SousTitle icon="fal fa-user-circle" sousTitle="Profile" />
        </NavLink>

        <NavLink to='/favorite' activeClassName="active">
          <SousTitle icon="fal fa-heart" sousTitle="Favorite" />
        </NavLink>

        <NavLink to='/chat'>
          <SousTitle icon="fal fa-comments" sousTitle="Chats" />
        </NavLink>

        <NavLink to='/friends'>
          <SousTitle icon="fal fa-user-friends" sousTitle="Friends" />
        </NavLink>

        <NavLink to='/wallet'>
          <SousTitle icon="fal fa-wallet" sousTitle="Wallet" />
        </NavLink>

        <Title title="main" />
        <NavLink to='/store'>
          <SousTitle icon="fal fa-store" sousTitle="Store" />
        </NavLink >

        <NavLink to='/market'>
          <SousTitle icon="fal fa-boxes-alt" sousTitle="Market" />
        </NavLink >

        <NavLink to='/streams'>
          <SousTitle icon="fal fa-video" sousTitle="Streams" />
        </NavLink >

        <NavLink to='/community'>
          <SousTitle icon="fal fa-users" sousTitle="Community" />
        </NavLink >

        <Title title="support" />

        <NavLink to='/report'>
          <SousTitle icon="fal fa-info-circle" sousTitle="Report" />
        </NavLink >

        <NavLink to='/help'>
          <SousTitle icon="fal fa-question-square" sousTitle="Help" />
        </NavLink >
      </div >
    </div >
  )
}

export default SideBar;