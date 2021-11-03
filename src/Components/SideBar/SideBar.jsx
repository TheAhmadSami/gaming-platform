import React from 'react';
import { SousTitle, Title } from './../../Components';
import { Logo } from './../../Components';
import './SideBar.scss';

function SideBar(props) {
  return (

    <div id="_sidebar">

      <div className="top-item">
        <i className="fal fa-bars"></i>
        <div className='logot'>  <Logo /></div>
      </div>
      <div className="bottom-item">
        <SousTitle icon="fal fa-home-lg-alt" sousTitle="Home" />
        <Title title="ACCOUNT" />
        <SousTitle icon="fal fa-user-circle" sousTitle="Profile" />
        <SousTitle icon="fal fa-heart" sousTitle="Favorite" />
        <SousTitle icon="fal fa-comments" sousTitle="Chats" />
        <SousTitle icon="fal fa-user-friends" sousTitle="Friends" />
        <SousTitle icon="fal fa-wallet" sousTitle="Wallet" />
        <Title title="MAIN" />
        <SousTitle icon="fal fa-store" sousTitle="Store" />
        <SousTitle icon="fal fa-cubes" sousTitle="Market" />
        <SousTitle icon="fal fa-video" sousTitle="Streams" />
        <SousTitle icon="fal fa-users" sousTitle="Community" />
        <Title title="SUPPORT" />
        <SousTitle icon="fal fa-info-circle" sousTitle="Report" />
        <SousTitle icon="fal fa-question-square" sousTitle="Help" />
      </div>
    </div>
  )
}

export default SideBar;