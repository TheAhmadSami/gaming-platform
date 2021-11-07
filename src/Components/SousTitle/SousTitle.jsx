import React from 'react';

import './SousTitle.scss';

function SousTitle(props) {
    return (
        <div className="soustitle">
            <i className={props.icon}></i>
            {props.sousTitle}
        </div>
    )
}

export default SousTitle;