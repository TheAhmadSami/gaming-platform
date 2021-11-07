import React from 'react';

import logoLight from './../Assets/media/logo-light.svg';
import logoDark from './../Assets/media/logo-dark.svg';

function Logo(props) {
  if (props.type == "light") {
    return <img src={logoLight} alt="Gaming Platform" />
  } else {
    return <img src={logoDark} alt="Gaming Platform" />
  }
}


Logo.defualtProps = {
  type: "dark"
}

export default Logo;