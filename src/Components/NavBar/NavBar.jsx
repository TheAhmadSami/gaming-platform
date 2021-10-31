import React from 'react';

import './NavBar.scss';

function NavBar(props) {
  return (
    <div id="navbar">

      <div id="search-bar">
        <div className="search-input">
          <i className="fal fa-search"></i>
          <input />
        </div>
        <i class="fal fa-microphone"></i>
      </div>

      <div id="navbar-controls">
        <div id="messages">
          <button id="messages-btn">
            <i className="fal fa-comment-dots"></i>
          </button>

          <div className="messages-content">

          </div>
        </div>

        <div id="notifications">
          <button id="notifications-btn">
            <i className="fal fa-comment-dots"></i>
          </button>

          <div className="notifications-content">

          </div>
        </div>

        <div id="user-profile">
          <button id="user-btn">
            <img src="" alt="" />
          </button>

          <div className="user-content">

          </div>
        </div>

      </div>






    </div>
  )
}

export default NavBar;