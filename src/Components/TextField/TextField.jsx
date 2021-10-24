import React from 'react';

import './TextField.scss';

function TextField(props) {

  return (
    <input {...props}></input>
    // <input type={props.type} placeholder={props.placeholder}></input>
  )
}

TextField.defualtProps = {
  type: "text"
}

export default TextField;