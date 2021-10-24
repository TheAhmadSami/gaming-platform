import React from 'react';

import './SocialMediaAuth.scss';

import google from './../../Assets/media/google.svg';
import apple from './../../Assets/media/apple.svg';
import facebook from './../../Assets/media/facebook.svg';
import twitter from './../../Assets/media/twitter.svg';

function SocialMediaAuth(props) {
  return (
    <ul className="social-media-auth">
      <li><img src={google} alt="Google" /></li>
      <li><img src={apple} alt="Apple" /></li>
      <li><img src={facebook} alt="Facebook" /></li>
      <li><img src={twitter} alt="Twitter" /></li>
    </ul>
  )
}

export default SocialMediaAuth;